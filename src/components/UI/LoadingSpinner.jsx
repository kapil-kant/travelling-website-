import React from 'react';
import styles from './LoadingSpinner.module.css';

/**
 * A simple, centered spinning loader animation component.
 * No props are required.
 */
const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        {/* The spinner element itself */}
      </div>
    </div>
  );
};

export default LoadingSpinner;