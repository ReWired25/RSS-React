import React from 'react';

import { ICardProps } from 'types/interfaces';

class Card extends React.Component<ICardProps> {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.img} alt="product-image" />
        <p className="card-title">{this.props.title}</p>
        <p className="card-type">{this.props.type}</p>
        <div className="card-color-container">
          <p className="color-title">color:</p>
          <p className="current-color">{this.props.color}</p>
        </div>
        <p className="card-price">{this.props.price}</p>
      </div>
    );
  }
}

export default Card;
