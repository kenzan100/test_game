import React from 'react';
import { Image } from './image';

export function Card(props) {
  const { card } = props;
  return(
    <div className='card'>
      <Image className='card__image' src={ card.img_url } height={ 100 }/>
      <span>{ card.id }</span>
    </div>
  );
}

export function GameBoard(props) {
  const { enemy_cards, my_cards } = props;
  return (
    <div className='board'>
      <div className='enemy__board'>
        { enemy_cards.map( c => (
          <div key={ c.id } className='card__item'>
            <Card card={ c } />
          </div>
          ))}
      </div>
      <div className='my__board'>
        { my_cards.map( c => (
          <div key={ c.id } className='card__item'>
            <Card card={ c } />
          </div>
          ))}
      </div>
    </div>
  );
}
