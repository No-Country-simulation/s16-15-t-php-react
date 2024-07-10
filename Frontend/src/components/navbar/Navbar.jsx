import ButtonBdr from "../button/ButtonBdr"
import ButtonBg from "../button/ButtonBg"
import '../../styles/navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link>SkillMatch</Link>
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