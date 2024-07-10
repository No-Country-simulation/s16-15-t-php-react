import React from 'react'
import { Link } from "react-router-dom"
import ButtonGrey from "../components/button/ButtonGrey"
import ButtonBg from "../components/button/ButtonBg"
import '../styles/loginPage.css'

const LoginPage = () => {
  return (
    <form>
        <Link className="link" to="/register">¿No tienes una cuenta? Regístrate</Link>
        <ButtonGrey to="/google" text="Continuar con Google"></ButtonGrey>
        <ButtonGrey to="/facebook" text="Continuar con Facebook"></ButtonGrey>
        <input className="inp-plc" type="password" placeholder="Contraseña"></input>
        <input className="inp-plc" type="text" placeholder="Email"></input>
        <div>
            <label><input type="checkbox"></input>Recuérdame</label>
            <ButtonBg to="/loginlogin" text="Iniciar sesión"></ButtonBg>
        </div>
    </form>
  )
}

export default LoginPage