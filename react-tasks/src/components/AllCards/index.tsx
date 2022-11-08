import React from 'react';

import Card from '../Card';

import { IAllCardsProps } from './types';

const AllCards = ({ data }: IAllCardsProps) => {
  return (
    <div className="all-cards-container">
      {data.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
};

export default AllCards;
