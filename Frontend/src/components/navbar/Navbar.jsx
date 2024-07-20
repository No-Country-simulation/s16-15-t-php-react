import ButtonBdr from "../button/ButtonBdr"
import ButtonBg from "../button/ButtonBg"
import styles from'../../styles/navbar.module.css'
import { Link, useLocation } from "react-router-dom"
import logo from '../../assets/logo.svg'
import InputSearch from "../input/InputSearch"
import offerIcon from "../../assets/ofertas.svg"
import proposalsIcon from "../../assets/propuestas.svg" 
import ButtonIcon from "../button/ButtonIcon"
import NavSelect from "../select/NavSelect"


function Navbar() {
  const location = useLocation();

  const hiddenComponentsRoutes = {
    inputSearch: ['/login', '/registerForm', '/firstQuestionregister'],
    buttonIcon: ['/', '/login', '/registerForm', '/firstQuestionregister'],
    navSelect: ['/', '/login', '/registerForm', '/firstQuestionregister']
  }

  const shouldShowComponent = (component) => {
    return !hiddenComponentsRoutes[component].includes(location.pathname);
  }

  return (
    <nav>
      <Link className={styles.logoLink} to='/'>
        <img src={logo} alt="SkillMatch logo" />
      </Link>
      {shouldShowComponent('inputSearch') && <InputSearch />}
      <div className={styles.navLinks}>
        {location.pathname === '/' && <Link className='link'>Sobre Nosotros</Link>}
        {location.pathname === '/' && <Link className='link'>Preguntas Frecuentes</Link>}
        {location.pathname === '/' && <ButtonBdr text="Ingresa" to='/login' />}
        {location.pathname === '/' && <ButtonBg text="Registrate" to='/registerForm' />}
      </div>
      <div className={styles.navButtons}>
        {shouldShowComponent('navSelect') && <NavSelect />}
        {shouldShowComponent('buttonIcon') && <ButtonIcon iconSrc={proposalsIcon} to='/proposals' />}
        {shouldShowComponent('buttonIcon') && <ButtonIcon iconSrc={offerIcon} />}
        </div>
    </nav>
  )
}

export default Navbar