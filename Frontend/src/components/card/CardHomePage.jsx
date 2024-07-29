import React, { useState } from 'react';
import styles from '../../styles/cardHomePage.module.css';
import img from '../../assets/homePage.svg';

const CardHomePage = ({freelancer, employer}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);

  let texts = []

  if (freelancer) {
    texts = [
      "Explora miles de oportunidades freelance en un solo lugar",
      "Descubre oportunidades únicas para tu carrera freelance",
      "Encuentra el trabajo freelance perfecto para ti ajustándolo a tus necesidades",
    ];
  } else if (employer) {
    texts = [
      "Encuentra el freelancer ideal para tu negocio o emprendimiento",
      "Tu solución para encontrar capital calificado a solo un click",
      "Fácil, rápido y sencillo. Valoramos tu tiempo y comodidad",
    ];
  }

  const handleButtonClick = (index) => {
    setTextIndex(index);
    setSelectedButton(index);
  };

  return (
    <div className={styles.mainDiv}>
        <img src={img} className={styles.cardImg} alt="Home" />
        <div className={styles.cardTxt}>
            <h2>{texts[textIndex]}</h2>
            <button className={`${styles.cardBut} ${selectedButton === 0 ? styles.selectedBut : ''}`} onClick={() => handleButtonClick(0)} ></button>
            <button className={`${styles.cardBut} ${selectedButton === 1 ? styles.selectedBut : ''}`} onClick={() => handleButtonClick(1)} ></button>
            <button className={`${styles.cardBut} ${selectedButton === 2 ? styles.selectedBut : ''}`} onClick={() => handleButtonClick(2)}></button>
        </div>
    </div>
  );
};

export default CardHomePage;