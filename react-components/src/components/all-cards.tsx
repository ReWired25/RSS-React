import React from 'react';
import Card from './card';
import data from '../assets/data/data';

class AllCards extends React.Component {
  render() {
    return (
      <div className="all-cards-container">
        {data.map((card, index) => {
          return (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              type={card.type}
              color={card.color}
              price={card.price}
            />
          );
        })}
      </div>
    );
  }
}

export default AllCards;
