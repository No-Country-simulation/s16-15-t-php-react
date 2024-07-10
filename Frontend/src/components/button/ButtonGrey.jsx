import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/buttons.css'
import { Link } from 'react-router-dom'

const ButtonGrey = ({to, text, img}) => {
  return (
    <button className='btn-gry'>
        <img src={img}></img>
      <Link to={to}>{text}</Link>
    </button>
  )
}

export default ButtonGrey