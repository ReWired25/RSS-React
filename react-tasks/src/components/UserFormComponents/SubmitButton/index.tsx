import React from 'react';

import { ISubmitButtonProps } from './types';

class SubmitButton extends React.Component<ISubmitButtonProps> {
  render() {
    return (
      <div className="submit-button-container">
        <button
          className={`submit-button + ${this.props.isSubmitSuccess ? 'submit-success' : ''}`}
          name="submitButton"
          type="submit"
          data-testid="submitButton"
          disabled={this.props.isDisabled ? true : false}
        >
          Submit
        </button>
        <p className="submit-message">Your data is saved!</p>
      </div>
    );
  }
}

export default SubmitButton;
