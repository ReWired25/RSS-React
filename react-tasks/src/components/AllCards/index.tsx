import React from 'react';
import Card from '../Card';

import { IAllCardsProps } from './types';

class AllCards extends React.Component<IAllCardsProps> {
  render() {
    return (
      <div className="all-cards-container">
        {this.props.data.map((character) => (
          <Card key={character.id} img={character.image} name={character.name} />
        ))}
      </div>
    );
  }
}

export default AllCards;
