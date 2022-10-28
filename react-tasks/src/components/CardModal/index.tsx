import React from 'react';

import { ICardModalProps } from './types';

const CardModal = (props: ICardModalProps) => {
  const handleOverlay = (e: React.MouseEvent) => {
    const currentElement = e.target as HTMLElement;
    if (currentElement.classList.contains('modal-overlay')) {
      props.onModalClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => handleOverlay(e)}>
      <div className="modal-container">
        <button className="modal-close-button" onClick={() => props.onModalClose()}>
          [X]
        </button>
        <img className="modal-img" src={props.data.image} alt="character image" />
        <p className="modal-name">Name: {props.data.name}</p>
        <p className="modal-gender">Gender: {props.data.gender}</p>
        <p className="modal-species">Species: {props.data.species}</p>
      </div>
    </div>
  );
};

export default CardModal;
