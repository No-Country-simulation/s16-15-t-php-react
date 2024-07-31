import { Link } from "react-router-dom"
import profileButton from '../../assets/profilebutton.svg'
import styles from '../../styles/buttons.module.css'

const ButtonProfile = () => {
  return (
    <Link className={styles.img2}>
      <img className={styles.img2} src={profileButton} alt="foto de perfil del usuario" />
    </Link>
  )
}

export default ButtonProfile