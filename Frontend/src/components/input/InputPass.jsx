import React, { useState } from 'react';
import '../../styles/inputs.css';
import IconEyeOpen from '../../assets/IconEyeOpen.svg';
import IconEyeClosed from '../../assets/IconEyeClosed.svg';

const InputPass = ({ onChange, placeholder }) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const iconImg = showPassword ? IconEyeOpen : IconEyeClosed;

    return (
        <div id="inp-pass-div">
            <input
                id="inp-pass"
                className="inp"
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                minLength={12} 
                maxLength={24} 
                onChange={handleChange}
            />
            <img
                id="img-eye"
                onClick={togglePasswordVisibility}
                src={iconImg}
                alt="Mostrar/ocultar contraseña"
            />
        </div>
    );
};

export default InputPass;