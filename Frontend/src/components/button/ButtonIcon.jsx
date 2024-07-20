import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import styles from "../../styles/buttons.module.css"

const ButtonIcon = ({to, iconSrc, altText}) => {
  return (
    <Link to={to} className={styles.buttonIcon}>
      <img src={iconSrc} alt={altText} className={styles.iconBtn} />
    </Link>
  )
}

ButtonIcon.propTypes = {
  to: PropTypes.string,
  iconSrc: PropTypes.string,
  altText: PropTypes.string
  }

export default ButtonIcon
