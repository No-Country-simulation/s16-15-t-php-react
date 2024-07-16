import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/registerFormPage.module.css';
import ButtonGrey from '../components/button/ButtonGrey';
import ButtonBg from '../components/button/ButtonBg';
import LogoGoogle from '../assets/LogoGoogle.svg';
import LogoFacebook from '../assets/LogoFacebook.svg';
import InputText from '../components/input/InputText';
import InputPass from '../components/input/InputPass';
import InputNumber from '../components/input/InputNumber';

const RegisterFormPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (value) => { setName(value); };
  const handleLastNameChange = (value) => { setLastName(value); };
  const handlePasswordChange = (value) => { setPassword(value); };  
  const handlePassword2Change = (value) => { setPassword2(value); };  
  const handleEmailChange = (value) => { setEmail(value); };  
  const handlePhoneChange = (isValid, value) => { setNumber(value); console.log("telefono: ", value) };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prueba");
  };

  return (
    <form className={styles.frm1} onSubmit={handleSubmit}>
      <Link className={styles.link} to="/login">
        ¿Ya tienes cuenta? Ingresa aquí
      </Link>
      <div className={styles.buttonContainer}>
        <ButtonGrey to="/google" img={LogoGoogle} text="Continuar con Google" />
        <ButtonGrey to="/facebook" img={LogoFacebook} text="Continuar con Facebook" />
      </div>
      <div className={styles.divName}>
        <InputText type="text" placeholder="Nombre" onChange={handleNameChange} />
        <InputText type="text" placeholder="Apellido" onChange={handleLastNameChange} />
      </div>
      <div className={styles.divPass}>
        <InputPass placeholder="Contraseña" onChange={handlePasswordChange} />
        <InputPass placeholder="Repita contraseña" onChange={handlePassword2Change} />
      </div>
      <div className={styles.divInput1}>
        <InputText type="email" placeholder="Email" onChange={handleEmailChange} />
      </div>
      <div>
        <InputNumber placeholder="Teléfono" onPhoneNumberChange={handlePhoneChange} />
      </div>
      <div className={styles.divLog}>
        <label>
          <input type="checkbox" />
          <span className={styles.checkmark}>Recuérdame</span>
        </label>
        <ButtonBg type="submit" text="Crear cuenta" />
      </div>
    </form>
  );
};

export default RegisterFormPage;