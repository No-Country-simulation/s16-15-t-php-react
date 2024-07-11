import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registerForm.css';
import ButtonGrey from '../components/button/ButtonGrey';
import LogoGoogle from '../assets/LogoGoogle.svg';
import LogoFacebook from '../assets/LogoFacebook.svg';
import InputText from '../components/input/InputText';
import InputPass from '../components/input/InputPass';

const RegisterFormPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (value) => {
        setEmail(value);
        console.log('Email actualizado:', value);
    };
    
    const handlePasswordChange = (value) => {
        setPassword(value);
        console.log('Password actualizado:', value);
    };

    const handlePassword2Change = (value) => {
        setPassword(value);
        console.log('Password2 actualizado:', value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <form className="frm-1" onSubmit={handleSubmit}>
        <Link id="linkID" className="link" to="/login">
            ¿Ya tienes cuenta? Ingresa aquí
        </Link>
        <div id="div-but">
            <ButtonGrey to="/google" img={LogoGoogle} text="Continuar con Google" />
            <ButtonGrey id="btn-st" to="/facebook" img={LogoFacebook} text="Continuar con Facebook" />
        </div>
        <div id="div-name">
            <InputText className="inp-name" type="email" placeholder="Nombre" onChange={handleEmailChange} />
            <InputText className="inp-name" type="email" placeholder="Apellido" onChange={handleEmailChange} />
        </div>
        
    </form>
  );
};

export default RegisterFormPage