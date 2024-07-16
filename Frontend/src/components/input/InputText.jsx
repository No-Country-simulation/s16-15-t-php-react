import React from 'react';
import styles from '../../styles/inputs.module.css';

const InputText = ({ onChange, type, placeholder }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input 
      className={styles.inpText} 
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputText;