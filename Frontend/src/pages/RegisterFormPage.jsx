import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registerForm.css';
import ButtonGrey from '../components/button/ButtonGrey';
import ButtonBg from '../components/button/ButtonBg';
import LogoGoogle from '../assets/LogoGoogle.svg';
import LogoFacebook from '../assets/LogoFacebook.svg';
import InputText from '../components/input/InputText';
import InputPass from '../components/input/InputPass';

const RegisterFormPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (value) => {
        setEmail(value);
        console.log('Nombre actualizado:', value);
    };

    const handleLastNameChange = (value) => {
        setEmail(value);
        console.log('Apellido actualizado:', value);
    };
    
    const handlePasswordChange = (value) => {
        setPassword(value);
        console.log('Password actualizado:', value);
    };

    const handlePassword2Change = (value) => {
        setPassword(value);
        console.log('Password2 actualizado:', value);
    };

    const handleEmailChange = (value) => {
        setPassword(value);
        console.log('Email actualizado:', value);
    };

    const handleNumberChange = (value) => {
        setPassword(value);
        console.log('Número actualizado:', value);
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
            <ButtonGrey to="/facebook" img={LogoFacebook} text="Continuar con Facebook" />
        </div>
        <div id="div-name">
            <InputText type="text" placeholder="Nombre" onChange={handleNameChange} />
            <InputText type="text" placeholder="Apellido" onChange={handleLastNameChange} />
        </div>
        <div id="div-pass">
            <InputPass id="inp-pass" placeholder="Contraseña" onChange={handlePasswordChange}></InputPass>
            <InputPass id="inp-pass" placeholder="Repita contraseña" onChange={handlePassword2Change}></InputPass>
        </div>
        <div id="div-input1">
            <InputText id="mail"type="email" placeholder="Email" onChange={handleEmailChange} />
            
        </div>
        <div id="div-input2">
            <InputText type="email" placeholder="Teléfono" onChange={handleNumberChange} />
        </div>
        <div className="div-log">
            <label>
                <input type="checkbox" />
                <span className="checkmark">Recuérdame</span>
            </label>
            <ButtonBg type="submit" text="Crear cuenta" />
        </div>
    </form>
  );
};

export default RegisterFormPage

// se debería restructurar con menos divs. Habría que juntar todas las funciones en una sola