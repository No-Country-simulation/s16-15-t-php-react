import ButtonBdr from "../button/ButtonBdr"
import ButtonBg from "../button/ButtonBg"
import styles from'../../styles/navbar.module.css'
import { Link, useLocation } from "react-router-dom"
import logo from '../../assets/logo.svg'
import InputSearch from "../input/InputSearch"
import offerIcon from "../../assets/ofertas.svg"
import proposalsIcon from "../../assets/propuestas.svg" 
import ButtonIcon from "../button/ButtonIcon"


function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <Link className={styles.logoLink} to='/'>
        <img src={logo} alt="SkillMatch logo" />
      </Link>
      {location.pathname === '/' && <InputSearch />}
      <div className={styles.navLinks}>
        {location.pathname === '/' && <Link className='link'>Sobre Nosotros</Link>}
        {location.pathname === '/' && <Link className='link'>Preguntas Frecuentes</Link>}
        {location.pathname === '/' && <ButtonBdr text="Ingresa" to='/login' />}
        {location.pathname === '/' && <ButtonBg text="Registrate" to='/registerForm' />}
        {location.pathname === '/browser' && <ButtonIcon iconSrc={offerIcon} />}
        {location.pathname === '/browser' && <ButtonIcon iconSrc={proposalsIcon} />}
      </div>
    </nav>
  )
}

export default Navbar