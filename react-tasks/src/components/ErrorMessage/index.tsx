import React from 'react';

import { IErrorMessageProps } from './types';

class ErrorMessage extends React.Component<IErrorMessageProps> {
  render() {
    return (
      <div className="error-message-container">
        <p className="error-message">{this.props.message}</p>
      </div>
    );
  }
}

export default ErrorMessage;
