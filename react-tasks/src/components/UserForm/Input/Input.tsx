import React from 'react';

import { IInputProps } from './types';

class InputText extends React.Component<IInputProps> {
  render() {
    return (
      <label className={this.props.inputClassName + ' ' + 'input-label'}>
        <p>{this.props.labelText}</p>
        <input
          className="input-field"
          type={this.props.inputType}
          name={this.props.inputName}
          data-testid={this.props.inputName}
        />
        <p className="invalid-message">{this.props.validationMessage}</p>
      </label>
    );
  }
}

export default InputText;
