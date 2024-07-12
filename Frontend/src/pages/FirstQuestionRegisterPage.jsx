import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/firstQuestionRegisterPage.css';
import CardRegisterQuestion from '../components/card/CardRegisterQuestion';
import ButtonBg from '../components/button/ButtonBg';

const FirstQuestionRegisterPage = () => {

  return (
    <main id="tag-main">
        <div id="div-title">
            <h2>¿Eres cliente o freelancer?</h2>
        </div>
        <div id="div-cards">
            <CardRegisterQuestion></CardRegisterQuestion>
        </div>
        <div id="div-but-log">
            <ButtonBg to="/registerForm" text="Crear cuenta"></ButtonBg>
        </div>
        <Link id="linkID" className="link" to="/login">
            ¿Ya tienes cuenta? Ingresa aquí
        </Link>
    </main>
  )
}

export default FirstQuestionRegisterPage