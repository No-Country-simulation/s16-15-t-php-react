import PropTypes from 'prop-types'
import styles from '../../styles/buttons.module.css'
import { Link } from 'react-router-dom'

const ButtonBg = ({to, text}) => {

  return (
    <button className={styles.btnBg}>
      <Link to={to} className='link'>{text}</Link>
    </button>
  )
}

ButtonBg.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}


export default ButtonBg
