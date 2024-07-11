import React from 'react'
import '../../styles/inputs.css'

const InputEmail = ({ onChange}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

  return (
    <input 
        id="inp-Email" 
        className="inp" 
        type="text"
        placeholder="Email"
        onChange={handleChange}>
    </input>
  )
}

export default InputEmail