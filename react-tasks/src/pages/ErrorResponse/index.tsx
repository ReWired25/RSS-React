import React from 'react';
import { Link } from 'react-router-dom';

const ErrorResponse = () => {
  return (
    <div className="error-container">
      <p className="error-status">Error: 404</p>
      <p className="error-title">Page not found</p>
      <p className="error-info">
        Return to the <Link to="/">main</Link> page
      </p>
    </div>
  );
};

export default ErrorResponse;
