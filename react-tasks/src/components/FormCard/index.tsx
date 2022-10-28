import React from 'react';

import { FormCardFields } from 'constants/FormCardFields';

import { IFormCardProps } from './types';

const FormCard = (props: IFormCardProps) => {
  return (
    <div className="form-card">
      {FormCardFields.map((fieldName) => {
        return (
          <p key={fieldName} className={`card-${fieldName}`}>
            {props.FormCardData[fieldName]}
          </p>
        );
      })}
      <img className="form-card-img" src={props.FormCardData.picture} alt="user-picture" />
    </div>
  );
};

export default FormCard;
