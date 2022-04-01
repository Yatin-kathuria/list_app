import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return <input type='text' {...props} className={styles.input} />;
};

export default Input;
