import React from 'react';

import { IErrorMessageProps } from './types';

const ErrorMessage = (props: IErrorMessageProps) => {
  return (
    <div className="error-message-container">
      <p className="error-message">{props.message}</p>
    </div>
  );
};

export default ErrorMessage;
