import React from 'react';
import { Image } from './image';

export function Card(props) {
  const { card } = props;
  return(
    <div className='card'>
      <Image src={ card.img_url } height={ 100 }/>
      <span>{ card.id }</span>
    </div>
  );
}

export function GameBoard(props) {
  const { cards } = props;
  return (
    <div className='board'>
      { cards.map( c => (
        <div key={ c.id } className='card__item'>
          <Card card={ c } />
        </div>
        ))}
    </div>
  );
}
