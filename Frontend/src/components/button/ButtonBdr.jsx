import PropTypes from 'prop-types'
import '../../styles/buttons.css'
import { Link } from 'react-router-dom'

const ButtonBdr = ({ to, text }) => {
  return (
    <button className='btn-bdr'>
      <Link to={to}>{text}</Link>
    </button>
  )
}

ButtonBdr.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonBdr