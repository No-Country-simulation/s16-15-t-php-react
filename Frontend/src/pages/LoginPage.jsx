import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonSocial from '../components/button/ButtonSocial';
import ButtonBg from '../components/button/ButtonBg';
import InputText from '../components/input/InputText';
import InputPass from '../components/input/InputPass';
import styles from '../styles/loginPage.module.css';
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
        <form className={styles.frmMain} onSubmit={handleSubmit}>
            <Link className={styles.link} to="/registerForm">
                ¿No tienes una cuenta? Regístrate
            </Link>
            <div className={styles.buttonContainer}>
                <ButtonSocial to="/google" img={LogoGoogle} text="Continuar con Google" />
                <ButtonSocial to="/facebook" img={LogoFacebook} text="Continuar con Facebook" />
            </div>
            <div className={styles.inputContainer}>
                <InputText className={styles.inpFirst} type="email" placeholder="Email" onChange={handleEmailChange} />
                <InputPass className={styles.inpLast} placeholder="Contraseña" onChange={handlePasswordChange} />
            </div>
            <div className={styles.divLog}>
                <label>
                    <input type="checkbox" />
                    <span className={styles.checkmark}>Recuérdame</span>
                </label>
                <ButtonBg type="submit" text="Iniciar sesión" />
            </div>
        </form>
    );
};

export default LoginPage;
