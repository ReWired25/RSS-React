import React from 'react';

import { IErrorMessageProps } from './types';

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  return (
    <div className="error-message-container">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorMessage;
