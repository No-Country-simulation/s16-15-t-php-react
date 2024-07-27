import React from 'react';
import styles from '../../styles/cardProfileInfo.module.css';
import ButtonBg from '../../components/button/ButtonBg';

const CardProfileInfo = ({ text }) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.secondDiv}>
        <div className={styles.buttonDiv}>
          <ButtonBg className={styles.buttons} text={text} />
        </div>
        <div className={styles.infoDiv}>
          <strong>Actividad</strong>
          <div className={styles.lineInfo}>
            <p>Proyectos actuales</p>
            <span className={styles.span}>15</span>
          </div>
          <strong>Información</strong>
          <div className={styles.lineInfo}>
            <p>Certificados de cumplimiento</p>
            <span className={styles.span}>15</span>
          </div>
          <div className={styles.lineInfo}>
            <p>Última vez en línea</p>
            <span className={styles.span}>Hace 10 minutos</span>
          </div>
          <div className={styles.lineInfo}>
            <p>Es miembro desde</p>
            <span className={styles.span}>2015</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProfileInfo;
