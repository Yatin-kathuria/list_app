import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, id, onDeleteCard }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.iconContainer} onClick={() => onDeleteCard(id)}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
