const pg = require('pg');
const express = require('express');
const jsonMiddleware = express.json();
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const select = `
    select "gradeId" as "id",
           "name",
           "course",
           "grade"
      from "grades"
  `;
  db.query(select)
    .then(result => res.json(result.rows))
    .catch(err => {
      res.status(500).json({ error: 'An unexpected error occurred.' });
      console.error(err);
    });
});

app.post('/api/grades', jsonMiddleware, (req, res) => {
  let { name, course, grade } = req.body;
  grade = parseInt(grade, 10);
  if (!name || !course) {
    res.status(400).json({ error: 'The name, course, and grade fields are required.' });
  } else if (!grade) {
    res.status(400).json({ error: 'The grade field must be a number.' });
  } else {
    const insert = `
      insert into grades ("name", "course", "grade")
                  values ($1, $2, $3)
        returning "gradeId" as "id",
                  "name",
                  "course",
                  "grade";
    `;
    const values = [name, course, grade];
    db.query(insert, values)
      .then(result => res.status(201).json(result.rows[0]))
      .catch(err => {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      });
  }
});

app.put('/api/grades/:id', jsonMiddleware, (req, res) => {
  const id = parseInt(req.params.id, 10);
  let { name, course, grade } = req.body;
  if (grade) grade = parseInt(grade, 10);
  if (!id || id < 1) {
    res.status(400).json({ error: 'The grade id must be a positive integer' });
  } else if (!name && !course && !grade) {
    res.status(400).json({ error: 'The name, course, or grade field must be updated.' });
  } else if (isNaN(grade) && grade !== undefined) {
    res.status(400).json({ error: 'The grade field must be a number.' });
  } else {
    const reqLength = Object.keys(req.body).length;
    let course$ = '$3';
    let grade$ = '$4';
    if (reqLength === 1) {
      course$ = '$2';
      grade$ = '$2';
    } else if (reqLength === 2 && !name) {
      course$ = '$2';
      grade$ = '$3';
    } else if (reqLength === 2 && name) {
      grade$ = '$3';
    }
    let nameBoolean = false;
    let courseBoolean = false;
    let gradeBoolean = false;
    if (name) nameBoolean = true;
    if (course) courseBoolean = true;
    if (grade) gradeBoolean = true;
    const update = `
       update "grades"
          set ${nameBoolean ? '"name" = $2' : ''}
              ${(!courseBoolean && !gradeBoolean) || (!nameBoolean) ? '' : ','}
              ${courseBoolean ? `"course" = ${course$}` : ''}
              ${(courseBoolean && gradeBoolean) ? ',' : ''}
              ${gradeBoolean ? `"grade" = ${grade$}` : ''}
        where "gradeId" = $1
    returning "gradeId" as "id",
              "name",
              "course",
              "grade";
     `;
    const values = [id, name, course, grade];
    for (let i = 0; i < values.length; i++) {
      if (values.includes(undefined)) {
        values.splice(values.indexOf(undefined), 1);
      } else if (values.includes(NaN)) {
        values.splice(values.indexOf(NaN), 1);
      }
    }
    db.query(update, values)
      .then(result => {
        if (!result.rowCount) {
          return res.status(404).json({ error: 'The target id does not exist.' });
        }
        res.json(result.rows[0]);
      })
      .catch(err => {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      });
  }
});

app.delete('/api/grades/:id', jsonMiddleware, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id || id < 1) {
    res.status(400).json({ error: 'The grade id must be a positive integer' });
  } else {
    const del = `
      delete from "grades"
            where "gradeId" = $1
        returning *;
    `;
    db.query(del, [id])
      .then(result => {
        if (!result.rowCount) {
          return res.status(404).json({ error: 'The target id does not exist.' });
        }
        res.sendStatus(204);
      })
      .catch(err => {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
