import PropTypes from 'prop-types'
import styles from '../../styles/accordionItemFAQs.module.css'
import { useEffect, useRef, useState } from 'react';
import arrow from '../../assets/arrow.svg'

function AccordionItemFAQs({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <li onClick={toggleAccordion} className={styles.questionItem}>
      <div className={styles.questionTitle}>
        <img src={arrow} alt="arrow" className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ''}`}/>
        {question}
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
        <p>GitHub: https://github.com/No-Country-simulation/s16-15-t-php-react</p>
      </div>
    </li>
  )
}

AccordionItemFAQs.propTypes = {
  question: PropTypes.string.isRequired,
};

export default AccordionItemFAQs