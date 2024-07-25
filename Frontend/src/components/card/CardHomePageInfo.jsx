import React from 'react'
import styles from '../../styles/cardHomePageInfo.module.css';
import ButtonBg from '../../components/button/ButtonBg';
import img from "../../assets/profilebutton.svg"

const CardHomePageInfo = () => {
  return (
    <div className={styles.mainDiv}>
        <div className={styles.secondDiv}>
            <div className={styles.buttonDiv}>
                <img src={img} className={styles.profileImg}></img>
                <div className={styles.nameDiv}>
                    <strong className={styles.strongTxt}>Lucía Guerrero</strong>
                    <span>Diseñadora gráfica</span>
                </div>
            </div>
            <div className={styles.infoDiv}>
                <strong>Actividad</strong>
                <div className={styles.lineInfo}>
                    <p className={styles.pTag}>Proyectos actuales</p>
                    <span className={styles.span}>15</span>
                </div>
                <strong>Información</strong>
                <div className={styles.lineInfo}>
                    <p className={styles.pTag}>Certificados de cumplimiento</p>
                    <span className={styles.span}>15</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHomePageInfo