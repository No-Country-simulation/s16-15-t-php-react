import { useState } from "react";
import styles from "../../styles/navSelect.module.css"
import whiteArrow from "../../assets/whiteArrow.svg"

const NavSelect = () => {

    const options = [
      {label: "Freelancer", value: "freelancer"},
      {label: "Ofertas", vale: "ofertas"}
    ]

    const [selectedOption, setSelectedOption] = useState(options[0].label);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOption = (option) => {
      setSelectedOption(option.label);
      setIsOpen(false);
    }
  
    return (
      <div className={styles.selectNavContainer}>
        <div className={`${styles.selectNav} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
          <img src={whiteArrow} alt="arrow icon" className={`${styles.arrowWhite} ${isOpen ? styles.rotate : ''}`} />
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

export default NavSelect