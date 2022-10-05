import React from 'react';
import { Link } from 'react-router-dom';

class ErrorResponse extends React.Component {
  render() {
    return (
      <div>
        <p>Error: 404</p>
        <p>Page not found</p>
        <p>
          Return to the <Link to="/">main</Link> page
        </p>
      </div>
    );
  }
}

export default ErrorResponse;
