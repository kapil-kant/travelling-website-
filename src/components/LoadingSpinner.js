import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="spinner">
        <div className="spinner-dot dot-1"></div>
        <div className="spinner-dot dot-2"></div>
        <div className="spinner-dot dot-3"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
