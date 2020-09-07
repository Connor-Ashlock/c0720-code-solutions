/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');
let nextId = 1;

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
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
    const name = 'player-' + nextId++;
    const newPlayer = new Player(name);
    players[name] = newPlayer;
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

const dealCards = (deck, players) => {
  for (const player in players) {
    players[player].hand = deck.splice(0, 2);
  }
  return players;
};

const determineScore = players => {
  let points = 0;
  for (const player in players) {
    for (let i = 0; i < players[player].hand.length; i++) {
      if (players[player].hand[i].rank === 'ace') {
        points += 11;
      } else if (players[player].hand[i].rank === 'king' || players[player].hand[i].rank === 'queen' || players[player].hand[i].rank === 'jack') {
        points += 10;
      } else {
        points += Number(players[player].hand[i].rank);
      }
    }
    players[player].points = points;
    points = 0;
  }
  return players;
};

const determineWinner = players => {
  let leader = [players['player-1']];
  for (const player in players) {
    if (players[player] !== players['player-1']) {
      if (players[player].points > leader[0].points) {
        leader = [players[player]];
      } else if (players[player].points === leader[0].points) {
        leader.push(players[player]);
      }
    }
  }
  return leader[0];
};

const players = createPlayers();
const deck = shuffleDeck(createDeck());
const hand = dealCards(deck, players);
const playerScores = determineScore(hand);
const winner = determineWinner(playerScores);

console.log('winner', winner);
