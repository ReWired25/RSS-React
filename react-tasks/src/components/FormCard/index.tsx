import React from 'react';

import { FORM_CARD_FIELDS } from 'constants/FormCardFields';

import { IFormCardProps } from './types';

const FormCard = ({ FormCardData }: IFormCardProps) => (
  <div className="form-card">
    {FORM_CARD_FIELDS.map((fieldName) => {
      return (
        <p key={fieldName} className={`card-${fieldName}`}>
          {FormCardData[fieldName]}
        </p>
      );
    })}
    <img className="form-card-img" src={FormCardData.picture} alt="user-picture" />
  </div>
);

export default FormCard;
