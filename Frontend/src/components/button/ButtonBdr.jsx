import PropTypes from 'prop-types'
import styles from '../../styles/buttons.module.css'
import { Link } from 'react-router-dom'

const ButtonBdr = ({ to, text }) => {
  return (
    <button className={styles.btnBdr}>
      <Link to={to} className='link'>{text}</Link>
    </button>
  )
}

ButtonBdr.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonBdr