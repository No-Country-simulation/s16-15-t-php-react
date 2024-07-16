import React, { useState } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import styles from '../../styles/inputs.module.css';

const InputNumber = ({ onPhoneNumberChange, placeholder }) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (isValid, value, countryData) => {
    setPhone(value);
    if (onPhoneNumberChange) {
      onPhoneNumberChange(isValid, value, countryData);
    }
  };

  return (
    <div className={styles.divInpTel}>
      <IntlTelInput
        className={styles.intlTelInput}
        onPhoneNumberChange={handlePhoneChange}
        preferredCountries={['ar', 've']}
        value={phone}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputNumber;
