import React from 'react';
import Card from '../Card';

import { IAllCardsProps } from './types';

class AllCards extends React.Component<IAllCardsProps> {
  render() {
    return (
      <div className="all-cards-container">
        {this.props.data.map(({ id, image, name }) => (
          <Card key={id} img={image} name={name} />
        ))}
      </div>
    );
  }
}

export default AllCards;
