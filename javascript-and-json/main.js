/* eslint-disable no-console */
const books = [
  {
    title: 'How the Grinch Stole Christmas',
    author: 'Dr. Seuss',
    isbn: 9780739378564
  },
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss',
    isbn: 9780007158447
  },
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss',
    isbn: 9780007355914
  }
];

console.log('JSON serialized:', JSON.stringify(books));
console.log('JSON serialized typeof:', typeof JSON.stringify(books));
console.log('JSON  deserialized:', JSON.parse('{"name":"Connor","id":98043081}'));
console.log('JSON  deserialized typeof:', typeof JSON.parse('{"name":"Connor","id":98043081}'));
