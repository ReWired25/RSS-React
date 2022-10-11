import React from 'react';

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submit-button-container">
        <button
          className="submit-button"
          name="submitButton"
          type="submit"
          data-testid="submitButton"
          disabled
        >
          Submit
        </button>
        <p className="submit-message">Your data is saved!</p>
      </div>
    );
  }
}

export default SubmitButton;
