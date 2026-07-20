import React from 'react';
import styles from './LoadingSpinner.module.css';

/**
 * A simple, centered spinning loader component.
 * No props are required.
 * @returns {JSX.Element}
 */
const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner} aria-label="Loading...">
        <span className={styles.loaderRing}></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;