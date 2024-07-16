import React from 'react';
import styles from '../../styles/cardProfile.module.css';
import ButtonGrey from '../button/ButtonGrey';
import IconEyeClosed from '../../assets/profileCardImg.svg';

const CardProfile = () => {
  const names = ['Marketing digital', 'Creador de contenido', 'Creador UGC'];
  const buttons = names.map((name, index) => (
    <ButtonGrey key={index} text={name} />
  ));

  const img = "../assets/IconEyeClosed.svg"

  return (
    <div className={styles.mainDiv}>
      <div className={styles.divImg}>
        <img className={styles.img} src={IconEyeClosed}></img>
      </div>
      <div className={styles.divInfo}>
        {/* Debería quitar los br */}
        <strong className={styles.name}>Lucia Guerrero</strong><br />
        <strong className={styles.rol}>Creadora de contenido | Experta en marketing digital</strong><br /> 
        <span className={styles.secondName}>Mercedes Rodriguez?</span>
        <div className={styles.buttonsDiv}>
          {buttons}
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default CardProfile;