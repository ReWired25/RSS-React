import React from 'react';
import Card from '../Card';
import data from '../../assets/data/data';

class AllCards extends React.Component {
  render() {
    return (
      <div className="all-cards-container">
        {data.map(({ img, title, type, color, price }, index) => {
          return (
            <Card key={index} img={img} title={title} type={type} color={color} price={price} />
          );
        })}
      </div>
    );
  }
}

export default AllCards;
