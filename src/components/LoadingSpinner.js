import React from 'react';

const LoadingSpinner = () => {
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    margin: '20px auto',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  // Note: For a real-world application, the CSS animation ('spin') would typically be in a global stylesheet or CSS module.
  // For this self-contained component implementation, we assume the necessary CSS or inline styles suffice.
  // If a global stylesheet were available, we'd add:
  // @keyframes spin {
  //   0% { transform: rotate(0deg); }
  //   100% { transform: rotate(360deg); }
  // }

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle} className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;