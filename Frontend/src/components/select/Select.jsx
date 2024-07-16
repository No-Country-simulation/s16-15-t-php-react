import PropTypes from 'prop-types'
import styles from '../../styles/select.module.css'

const Select = ({ id, name, label, options }) => {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} className={styles.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className='option'>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select