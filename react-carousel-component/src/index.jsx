import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const characters = [
  {
    name: 'Greninja',
    imageUrl: 'https://www.smashbros.com/assets_v2/img/fighter/greninja/main8.png'
  },
  {
    name: 'Mewtwo',
    imageUrl: 'https://www.smashbros.com/assets_v2/img/fighter/mewtwo/main8.png'
  },
  {
    name: 'Fox',
    imageUrl: 'https://www.smashbros.com/assets_v2/img/fighter/fox/main.png'
  },
  {
    name: 'Samus',
    imageUrl: 'https://www.smashbros.com/assets_v2/img/fighter/samus/main8.png'
  }
];

ReactDOM.render(
  <Carousel characters={ characters } />,
  document.getElementById('root')
);
