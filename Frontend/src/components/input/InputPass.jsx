import React, { useState } from 'react';
import styles from '../../styles/inputs.module.css';
import IconEyeOpen from '../../assets/IconEyeOpen.svg';
import IconEyeClosed from '../../assets/IconEyeClosed.svg';

const InputPass = ({ onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const iconImg = showPassword ? IconEyeOpen : IconEyeClosed;

  return (
    <div className={styles.inpPassDiv}>
      <input
        className={styles.inp}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        minLength={12} 
        maxLength={24} 
        onChange={handleChange}
      />
      <img
        className={styles.imgEye}
        onClick={togglePasswordVisibility}
        src={iconImg}
        alt="Mostrar/ocultar contraseña"
      />
    </div>
  );
};

export default InputPass;