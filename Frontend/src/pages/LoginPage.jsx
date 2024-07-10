import React from 'react'
import { Link } from "react-router-dom"
import ButtonGrey from "../components/button/ButtonGrey"
import ButtonBg from "../components/button/ButtonBg"
import '../styles/loginPage.css'
import LogoGoogle from '../assets/LogoGoogle.svg'
import LogoFacebook from '../assets/LogoFacebook.svg'

const LoginPage = () => {
  return (
    <div id="main">
        <form>
            <Link id="linkID" className="link" to="/register">¿No tienes una cuenta? Regístrate</Link>
            <div id="div-but">
                <ButtonGrey to="/google" img={LogoGoogle} text="Continuar con Google"></ButtonGrey>            
                <ButtonGrey to="/facebook" img={LogoFacebook} text="Continuar con Facebook"></ButtonGrey>
            </div>
            
            <div id="div-inp">
                <input className="inp" type="password" placeholder="Contraseña"></input>
                <input className="inp" type="text" placeholder="Email"></input>
            </div>
            <div className="div-log">
                <label>
                    <input type="checkbox" />
                    <span className="checkmark">Recuérdame</span>
                </label>
                <ButtonBg to="/loginlogin" text="Iniciar sesión"></ButtonBg>
            </div>
        </form>
    </div>
  )
}

export default LoginPage