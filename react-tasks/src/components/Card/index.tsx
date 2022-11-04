import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from 'context';

import { ICardProps } from './types';

const Card = (props: ICardProps) => {
  const navigate = useNavigate();
  const { CharacterDispatch } = useContext(AppContext);

  const handleCharacterData = () => {
    CharacterDispatch({ newData: props.data });
    navigate('/character-info');
  };

  return (
    <div className="card-container" onClick={() => handleCharacterData()}>
      <img className="card-img" src={props.data.image} alt="character image" />
      <p className="card-title">{props.data.name}</p>
    </div>
  );
};

export default Card;
