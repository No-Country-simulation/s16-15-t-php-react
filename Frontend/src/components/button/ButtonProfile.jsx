import { Link } from "react-router-dom"
import profileButton from '../../assets/profilebutton.svg'

const ButtonProfile = () => {
  return (
    <Link>
    <img src={profileButton} alt="foto de perfil del usuario" />
    </Link>
  )
}

export default ButtonProfile