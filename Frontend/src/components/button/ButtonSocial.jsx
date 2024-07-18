import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/buttons.module.css'; 

const ButtonSocial = ({ to, text, img }) => {
  return (
    <button className={styles.btnSocial}>
      <img src={img} alt="icon" />
      <Link to={to} className={styles.link}>{text}</Link>
    </button>
  );
};

export default ButtonSocial;
