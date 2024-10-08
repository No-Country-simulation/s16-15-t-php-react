import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/registerForm.css';
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
  const handlePhoneChange = (isValid, value) => { setNumber(value); console.log("telefono: ", value)};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prueba")
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
        <InputPass id="inp-pass" placeholder="Contraseña" onChange={handlePasswordChange} />
        <InputPass id="inp-pass" placeholder="Repita contraseña" onChange={handlePassword2Change} />
      </div>
      <div id="div-input1">
        <InputText type="email" placeholder="Email" onChange={handleEmailChange} />
      </div>
      <div>
        <InputNumber placeholder="Teléfono" onPhoneNumberChange={handlePhoneChange} />
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

export default RegisterFormPage;
