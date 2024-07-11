import React from 'react'
import '../../styles/inputs.css'

const InputText = ({ onChange, type}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

  return (
    <input 
        id="inp-Email" 
        className="inp" 
        type={type}
        placeholder="Email"
        onChange={handleChange}>
    </input>
  )
}

export default InputText