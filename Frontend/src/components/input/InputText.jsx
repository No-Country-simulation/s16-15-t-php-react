import React from 'react'
import '../../styles/inputs.css'

const InputText = ({ onChange, type, placeholder}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

  return (
    <input 
        id="inp-text" 
        className="inp" 
        type={type}
        placeholder={placeholder}
        onChange={handleChange}>
    </input>
  )
}

export default InputText