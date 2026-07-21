import React from 'react';
import styles from './LoadingSpinner.module.css';

/**
 * A simple, centered spinning loader component.
 * Does not accept any props.
 */
const LoadingSpinner = () => {
  return (
    <div className={styles.spinner} />
  );
};

export default LoadingSpinner;
