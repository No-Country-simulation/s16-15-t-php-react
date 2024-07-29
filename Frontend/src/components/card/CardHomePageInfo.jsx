import React from 'react'
import styles from '../../styles/cardHomePageInfo.module.css';
import ButtonBg from '../../components/button/ButtonBg';

const CardHomePageInfo = ({employer, freelancer, img, name, job, activityNumber, infoNumber}) => {
    let activityText = '';
    let activityNum = '';
    let infoText = '';
    let infoNum = '';

    if (freelancer) {
        activityText = 'Proyectos actuales';
        activityNum = activityNumber
        infoText = 'Certificados de cumplimiento'
        infoNum = infoNumber
    } else if (employer) {
        activityText = 'Vistas actuales';
        activityNum = activityNumber
        infoText = 'Contactos actuales'
        infoNum = infoNumber
    }
  return (
    <div className={styles.mainDiv}>
        <div className={styles.secondDiv}>
            <div className={styles.buttonDiv}>
                <img src={img} className={styles.profileImg}></img>
                <div className={styles.nameDiv}>
                    <strong className={styles.strongTxt}>{name}</strong>
                    <span>{job}</span>
                </div>
            </div>
            <div className={styles.infoDiv}>
                <strong>Actividad</strong>
                <div className={styles.lineInfo}>
                    <p className={styles.pTag}>{activityText}</p>
                    <span className={styles.span}>{activityNum}</span>
                </div>
                <strong>Información</strong>
                <div className={styles.lineInfo}>
                    <p className={styles.pTag}>{infoText}</p>
                    <span className={styles.span}>{infoNum}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHomePageInfo