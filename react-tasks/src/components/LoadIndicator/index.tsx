import React from 'react';

const LoadIndicator = () => {
  return (
    <div className="load-indicator-container">
      <div className="indicator-container">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="load-indicator-content">Loading</p>
    </div>
  );
};

export default LoadIndicator;
