import PropTypes from 'prop-types'
import '../../styles/buttons.css'
import { Link } from 'react-router-dom'

const ButtonBg = ({to, text}) => {

  return (
    <button className='btn-bg'>
      <Link to={to} className='link'>{text}</Link>
    </button>
  )
}

ButtonBg.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}


export default ButtonBg
