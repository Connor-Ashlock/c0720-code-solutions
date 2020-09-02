/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, current) => total + current);

console.log(sum);

const product = numbers.reduce((total, current) => total * current);

console.log(product);

const balance = account.reduce((total, current) => {
  if (current.type === 'deposit') {
    return total + current.amount;
  } else {
    return total - current.amount;
  }
}, 0);

console.log(balance);

const composite = traits.reduce((pokemon, current) => Object.assign(pokemon, current), {});

console.log(composite);
