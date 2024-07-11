import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/registerForm.css';
import ButtonGrey from '../components/button/ButtonGrey';
import LogoGoogle from '../assets/LogoGoogle.svg';
import LogoFacebook from '../assets/LogoFacebook.svg';

const RegisterFormPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <form className="form-1"onSubmit={handleSubmit}>
        <Link id="linkID" className="link" to="/login">
            ¿Ya tienes cuenta? Ingresa aquí
        </Link>
        <div id="div-but">
            <ButtonGrey to="/google" img={LogoGoogle} text="Continuar con Google" />
            <ButtonGrey id="btn-st" to="/facebook" img={LogoFacebook} text="Continuar con Facebook" />
        </div>
    </form>
  );
};

export default RegisterFormPage