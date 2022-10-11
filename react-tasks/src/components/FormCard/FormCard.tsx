import React from 'react';

import { FormCardFields } from 'constants/FormCardFields';

import { IFormCardProps } from './types';

class FormCard extends React.Component<IFormCardProps> {
  render() {
    return (
      <div className="form-card">
        {FormCardFields.map((fieldName) => {
          return (
            <p key={fieldName} className={`card-${fieldName}`}>
              {this.props[fieldName]}
            </p>
          );
        })}
        <img className="card-img" src={this.props.picture} alt="user-picture" />
      </div>
    );
  }
}

export default FormCard;
