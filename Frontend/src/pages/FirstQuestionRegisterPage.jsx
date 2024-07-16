import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/firstQuestionRegisterPage.module.css';
import CardRegisterQuestion from '../components/card/CardRegisterQuestion';
import ButtonBg from '../components/button/ButtonBg';

const FirstQuestionRegisterPage = () => {
    
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <main className={styles.tagMain}>
      <div className={styles.divTitle}>
        <h2>¿Eres cliente o freelancer?</h2>
      </div>
      <div className={styles.divCards}>
        <CardRegisterQuestion onOptionChange={handleOptionChange} />
      </div>
      <div className={styles.divButLog}>
        <ButtonBg to="/registerForm" text="Crear cuenta" />
      </div>
      <Link className={styles.linkID} to="/login">
        ¿Ya tienes cuenta? Ingresa aquí
      </Link>
    </main>
  );
};

export default FirstQuestionRegisterPage;
