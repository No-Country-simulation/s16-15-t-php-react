import ButtonBdr from "../button/ButtonBdr"
import ButtonBg from "../button/ButtonBg"
import '../../styles/navbar.css'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'
// import lupa from '../../assets/icono-busqueda.svg'

function Navbar() {
  return (
    <nav>
      <Link>
        <img src={logo} alt="SkillMatch logo" />
      </Link>
      <div>
        <input type="search" placeholder="Buscar talento..." className="search-input" />
        {/* <button className="search-button">
          <img src={lupa} alt="" />
        </button> */}
      </div>
      <div className="nav-links">
        <Link className='link'>Sobre Nosotros</Link>
        <Link className='link'>Preguntas Frecuentes</Link>
        <ButtonBdr text="Ingresa" />
        <ButtonBg text="Registrate" />
      </div>
    </nav>
  )
}

export default Navbar