import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGrey from '../components/button/ButtonGrey';
import ButtonBg from '../components/button/ButtonBg';
import InputText from '../components/input/InputText';
import InputPass from '../components/input/InputPass';
import '../styles/loginPage.css';
import LogoGoogle from '../assets/LogoGoogle.svg';
import LogoFacebook from '../assets/LogoFacebook.svg';

const LoginPage = () => {

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
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="frm-main" onSubmit={handleSubmit}>
            <Link id="linkID" className="link" to="/registerForm">
                ¿No tienes una cuenta? Regístrate
            </Link>
            <div id="div-but">
                <ButtonGrey to="/google" img={LogoGoogle} text="Continuar con Google" />
                <ButtonGrey id="btn-st" to="/facebook" img={LogoFacebook} text="Continuar con Facebook" />
            </div>
            <div id="div-inp">
                <InputText className="inp-text" type="email" placeholder="Email" onChange={handleEmailChange} />
                <InputPass placeholder="Contraseña" onChange={handlePasswordChange} />
            </div>

            <div className="div-log">
                <label>
                    <input type="checkbox" />
                    <span className="checkmark">Recuérdame</span>
                </label>
                <ButtonBg type="submit" text="Iniciar sesión" />
            </div>
        </form>
    );
};

export default LoginPage;