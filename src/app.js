import React from 'react';
import { render } from 'react-dom';
import { GameBoard } from './components';

const dummyCards = [
  { id: 0, place: 'hand', img_url: 'http://static.ddmcdn.com/gif/4--animal-selfies--151222.jpg' },
  { id: 1, place: 'hand', img_url: 'http://i.telegraph.co.uk/multimedia/archive/03578/chip--wide_3578582k.jpg' },
]

render(
  <GameBoard cards={ dummyCards } />,
  document.getElementById('app')
);
