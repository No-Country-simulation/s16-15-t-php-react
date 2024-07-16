import React from 'react';
import styles from '../../styles/buttons.module.css';

const ButtonGrey = ({ text }) => {
  return (
    <button className={styles.btnGrey}>
      {text}
    </button>
  );
};

export default ButtonGrey;