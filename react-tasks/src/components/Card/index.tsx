import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { changeCharacterData } from 'store/CharacterState/reducer';

import { ICardProps } from './types';

const Card = ({ data }: ICardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCharacterData = () => {
    dispatch(changeCharacterData(data));
    navigate('/character-info');
  };

  return (
    <div className="card-container" onClick={handleCharacterData}>
      <img className="card-img" src={data.image} alt="character image" />
      <p className="card-title">{data.name}</p>
    </div>
  );
};

export default Card;
