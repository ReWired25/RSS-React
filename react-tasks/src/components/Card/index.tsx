import React from 'react';

import { ICardProps } from './types';

const Card = (props: ICardProps) => {
  return (
    <div className="card-container" onClick={() => props.handleModalData(props.data)}>
      <img className="card-img" src={props.data.image} alt="character image" />
      <p className="card-title">{props.data.name}</p>
    </div>
  );
};

export default Card;
