import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/accordionItemProfile.module.css';
import arrow from '../../assets/arrow.svg';

function AccordionItemProfile({ question, clickable }) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    if (clickable) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <li className={`${styles.questionItem} ${isOpen ? styles.active : ''} ${clickable ? styles.clickable : ''}`} onClick={toggleAccordion}>
      <div className={styles.questionTitle}>
        {question}
        {clickable && (
          <img src={arrow} alt="arrow" className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ''}`}/>
        )}
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
      >
        <p>https://github.com/No-Country-simulation/s16-15-t-php-react</p>
      </div>
    </li>
  );
}

AccordionItemProfile.propTypes = {
  question: PropTypes.string.isRequired,
  clickable: PropTypes.bool.isRequired, // Propiedad booleana para determinar si es clickable
};

export default AccordionItemProfile;
