import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/firstQuestionRegisterPage.css';
import CardRegisterQuestion from '../components/card/CardRegisterQuestion';
import ButtonBg from '../components/button/ButtonBg';

const FirstQuestionRegisterPage = () => {
    
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <main id="tag-main">
      <div id="div-title">
        <h2>¿Eres cliente o freelancer?</h2>
      </div>
      <div id="div-cards">
        <CardRegisterQuestion onOptionChange={handleOptionChange} />
      </div>
      <div id="div-but-log">
        <ButtonBg to="/registerForm" text="Crear cuenta" />
      </div>
      <Link id="linkID" className="link" to="/login">
        ¿Ya tienes cuenta? Ingresa aquí
      </Link>
    </main>
  );
};

export default FirstQuestionRegisterPage;