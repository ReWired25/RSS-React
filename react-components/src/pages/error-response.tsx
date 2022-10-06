import React from 'react';
import { Link } from 'react-router-dom';

class ErrorResponse extends React.Component {
  render() {
    return (
      <div className="error-container">
        <p className="error-status">Error: 404</p>
        <p className="error-title">Page not found</p>
        <p className="error-info">
          Return to the <Link to="/">main</Link> page
        </p>
      </div>
    );
  }
}

export default ErrorResponse;
