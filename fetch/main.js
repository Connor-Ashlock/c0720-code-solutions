/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/157')
  .then(res => res.json())
  .then(data => console.log(data));
