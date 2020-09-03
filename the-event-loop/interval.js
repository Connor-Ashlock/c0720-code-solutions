/* eslint-disable no-console */
let count = 3;
const setIntId = setInterval(() => {
  if (count === 0) {
    clearTimeout(setIntId);
    console.log('Blast off!');
  } else {
    console.log(count);
    count--;
  }
}, 1000);
