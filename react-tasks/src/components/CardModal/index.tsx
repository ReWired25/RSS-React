import React from 'react';

import { ICardModalProps } from './types';

class CardModal extends React.Component<ICardModalProps> {
  handleOverlay(e: React.MouseEvent) {
    const currentElement = e.target as HTMLElement;
    if (currentElement.classList.contains('modal-overlay')) {
      this.props.onModalClose();
    }
  }

  render() {
    return (
      <div className="modal-overlay" onClick={(e) => this.handleOverlay(e)}>
        <div className="modal-container">
          <button className="modal-close-button" onClick={() => this.props.onModalClose()}>
            [X]
          </button>
          <img className="modal-img" src={this.props.data.image} alt="character image" />
          <p className="modal-name">Name: {this.props.data.name}</p>
          <p className="modal-gender">Gender: {this.props.data.gender}</p>
          <p className="modal-species">Species: {this.props.data.species}</p>
        </div>
      </div>
    );
  }
}

export default CardModal;
