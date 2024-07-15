import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/buttons.css'

const ButtonGrey = ({to, text, img}) => {
  return (
    <button className='btn-gry'>
        <img src={img}></img>
      <Link to={to}>{text}</Link>
    </button>
  )
}

export default ButtonGrey