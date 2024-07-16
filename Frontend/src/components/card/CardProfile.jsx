import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/cardProfile.module.css';

const CardProfile = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.divImg}>

      </div>
      <div className={styles.divInfo}>
        <strong>Lucia Guerrero</strong>
        <strong>Creadora de contenido | Experta en marketing digital</strong>
        <span>Mercedes Rodriguez?</span>
      </div>
    </div>
  )
}

export default CardProfile