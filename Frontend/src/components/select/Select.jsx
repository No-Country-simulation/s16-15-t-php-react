import PropTypes from 'prop-types'
import styles from '../../styles/select.module.css'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

const Select = ({ id, label, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].label);
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  }

  return (
    <div className={styles.selectContainer}>
      <label htmlFor={id}>{label}</label>
      <div className={`${styles.select} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <img src={arrow} alt="arrow icon" className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ''}`} />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div key={option.value}
            className={styles.option}
            onClick={() => handleOption(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
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