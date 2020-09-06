/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');
let nextId = 1;

class Player {
  constructor() {
    this.hand = {};
  }
}

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

const createPlayers = () => {
  const players = {};
  for (let i = 0; i < 4; i++) {
    const newPlayer = new Player();
    players['player-' + nextId++] = newPlayer;
  }
  return players;
};

const createDeck = () => {
  const rank = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  const suit = ['club', 'spade', 'heart', 'diamond'];
  const deck = [];
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      const card = new Card(suit[i], rank[j]);
      deck.push(card);
    }
  }
  return deck;
};

const shuffleDeck = deck => _.shuffle(deck);

const players = createPlayers();
const deck = shuffleDeck(createDeck());

console.log(deck);
console.log(players);
