import React from 'react';

import { ICardProps } from 'types/interfaces';
import { CardStyles } from 'types/enums';

class Card extends React.Component<ICardProps> {
  selectColor() {
    if (
      this.props.color === CardStyles.differentColors ||
      this.props.color === CardStyles.defaultColor
    ) {
      return { color: CardStyles.defaultColor, fontWeight: 'bold' };
    }

    return { color: `${this.props.color}`, textShadow: CardStyles.textShadow };
  }

  render() {
    return (
      <div className="card-container">
        <img className="card-img" src={this.props.img} alt="product-image" />
        <p className="card-title">{this.props.title}</p>
        <p className="card-type">{this.props.type}</p>
        <div className="card-color-container">
          <p className="color-title">color:</p>
          <p className="current-color" style={this.selectColor()}>
            {this.props.color}
          </p>
        </div>
        <p className="card-price">{this.props.price}</p>
      </div>
    );
  }
}

export default Card;
