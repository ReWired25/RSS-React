import React from 'react';

import { ISubmitButtonProps } from './types';

const SubmitButton = ({ isValid, isSubmit }: ISubmitButtonProps) => {
  return (
    <div className="submit-button-container">
      <button
        className="submit-button"
        name="submitButton"
        type="submit"
        data-testid="submitButton"
        disabled={isValid}
      >
        Submit
      </button>
      {isSubmit && <p className="submit-message">Your data is saved!</p>}
    </div>
  );
};

export default SubmitButton;
