import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const ButtonIcon = ({to, iconSrc, altText}) => {
  return (
    <Link to={to}>
      <img src={iconSrc} alt={altText} />
    </Link>
  )
}

ButtonIcon.propTypes = {
  to: PropTypes.string,
  iconSrc: PropTypes.string,
  altText: PropTypes.string
  }

export default ButtonIcon
