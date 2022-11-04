import React from 'react';

import Card from '../Card';

import { IAllCardsProps } from './types';

const AllCards = (props: IAllCardsProps) => {
  return (
    <div className="all-cards-container">
      {props.data.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
};

export default AllCards;
