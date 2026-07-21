import React from 'react';

const LoadingSpinner = () => {
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    display: 'inline-block',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  // We need to define the keyframes for the spinner animation.
  // Since inline styles don't support keyframes directly in standard CSS objects,
  // we will simulate the necessary CSS setup or rely on a global/module CSS file.
  // For a self-contained component solution, we'll use a standard CSS approach 
  // and assume a global/module CSS file or inject the style tag if necessary.
  // However, for simplicity and adherence to React component structure, 
  // we will use a simple div structure and assume the CSS is handled externally or via a style tag.

  // Standard practice in React is to use CSS Modules or styled-components for animations.
  // Here, we define the basic structure and rely on the CSS class name 'spinner' to handle the animation.

  return (
    <div style={containerStyle}>
      <div className="spinner" style={spinnerStyle} />
    </div>
  );
};

// Note: For the CSS animation 'spin 1s linear infinite' to work, 
// the following CSS must be present in a global or imported stylesheet:
/*
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/

export default LoadingSpinner;
