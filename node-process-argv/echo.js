/* eslint-disable no-console */
process.argv.forEach((string, index) => {
  if (index === process.argv.length - 1) {
    console.log(string);
  }
});
