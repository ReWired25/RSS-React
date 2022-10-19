import React from 'react';
import Card from '../Card';
import CardModal from 'components/CardModal';

import { IdataResult, IAllCardsProps, IAllCardsState } from './types';

class AllCards extends React.Component<IAllCardsProps, IAllCardsState> {
  constructor(props: IAllCardsProps) {
    super(props);
    this.state = { modalData: null };
  }

  handleModalData(data: IdataResult) {
    this.setState({ modalData: data });
  }

  handleModalClose() {
    this.setState({ modalData: null });
  }

  render() {
    return (
      <div className="all-cards-container">
        {this.props.data.map((character) => (
          <Card
            key={character.id}
            data={character}
            onDataChange={this.handleModalData.bind(this)}
          />
        ))}
        {this.state.modalData && (
          <CardModal data={this.state.modalData} onModalClose={this.handleModalClose.bind(this)} />
        )}
      </div>
    );
  }
}

export default AllCards;
