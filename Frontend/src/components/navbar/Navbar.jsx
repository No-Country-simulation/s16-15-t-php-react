import ButtonBdr from "../button/ButtonBdr"
import ButtonBg from "../button/ButtonBg"
import styles from'../../styles/navbar.module.css'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'
import InputSearch from "../input/InputSearch"


function Navbar() {
  return (
    <nav>
      <Link>
        <img src={logo} alt="SkillMatch logo" />
      </Link>
      <InputSearch />
      <div className={styles.navLinks}>
        <Link className='link'>Sobre Nosotros</Link>
        <Link className='link'>Preguntas Frecuentes</Link>
        <ButtonBdr text="Ingresa" />
        <ButtonBg text="Registrate" />
      </div>
    </nav>
  )
}

export default Navbar