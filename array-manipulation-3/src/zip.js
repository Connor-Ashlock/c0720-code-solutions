/* eslint-disable no-unused-vars */
function zip(first, second) {
  const wrap = [];
  let length = 0;
  if (first.length <= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (let i = 0; i < length; i++) {
    const pair = [];
    pair.push(first[i], second[i]);
    wrap.push(pair);
  }
  return wrap;
}

// create a variable that will contain a wrapper array X
// create a variable for length that will be assigned later X
// create a conditional checking if the array length of the first param is less than or equal to the second X
// if true, store the length of the first param in a variable X
// if false, store the length of the second in a variable X
// create a for loop, looping as many times as the number stored in the length variable X
// in the loop, create a variable for an empty array X
// push the current index for both of the params into the most recently declared array X
// push the most recent array into the container array X
// return the container array X
