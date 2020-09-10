/* eslint-disable no-console */
/* eslint-disable no-undef */

const grade = document.getElementById('grade');
const studentName = document.getElementById('name');
const studentCourse = document.getElementById('course');
const form = document.getElementById('grade-form');

form.addEventListener('submit', handleSubmitClick);

function postGrade() {
  $.ajax({
    url: '/api/grades',
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    data: JSON.stringify({
      name: studentName.value,
      course: studentCourse.value,
      grade: grade.value
    })
  });
}

function handleSubmitClick() {
  event.preventDefault();
  postGrade();
  grade.value = '';
  studentName.value = '';
  course.value = '';
}
