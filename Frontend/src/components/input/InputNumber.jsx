import React, { useState } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

const InputNumber = ({ onPhoneNumberChange, placeholder }) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (isValid, value, countryData) => {
    setPhone(value);
    if (onPhoneNumberChange) {
      onPhoneNumberChange(isValid, value, countryData);
    }
  };

  return (
    <div>
      <IntlTelInput
        onPhoneNumberChange={handlePhoneChange}
        preferredCountries={['ar', 've']}
        value={phone}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputNumber;
