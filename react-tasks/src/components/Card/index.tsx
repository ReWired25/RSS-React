import React from 'react';

import { ICardProps } from './types';

class Card extends React.Component<ICardProps> {
  render() {
    return (
      <div className="card-container">
        <img className="card-img" src={this.props.img} alt="character image" />
        <p className="card-title">{this.props.name}</p>
      </div>
    );
  }
}

export default Card;
