import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const characters = [
  {
    greninja: 'https://www.smashbros.com/assets_v2/img/fighter/greninja/main8.png'
  },
  {
    mewtwo: 'https://www.smashbros.com/assets_v2/img/fighter/mewtwo/main8.png'
  },
  {
    fox: 'https://www.smashbros.com/assets_v2/img/fighter/fox/main.png'
  },
  {
    samus: 'https://www.smashbros.com/assets_v2/img/fighter/samus/main8.png'
  }
];

ReactDOM.render(
  <Carousel characters={ characters } />,
  document.getElementById('root')
);
