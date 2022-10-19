import React from 'react';

import { ICardProps } from './types';

class Card extends React.Component<ICardProps> {
  render() {
    return (
      <div className="card-container" onClick={() => this.props.onDataChange(this.props.data)}>
        <img className="card-img" src={this.props.data.image} alt="character image" />
        <p className="card-title">{this.props.data.name}</p>
      </div>
    );
  }
}

export default Card;
