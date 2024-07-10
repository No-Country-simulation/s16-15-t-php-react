import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/buttons.css'
import { Link } from 'react-router-dom'

const ButtonGrey = ({to, text}) => {
  return (
    <button className='btn-gry'>
      <a to={to} className='link'>{text}</a>
    </button>
  )
}

export default ButtonGrey

//Aquí se utiliza un a cuando debería ser Link pero es para cambiar el color de la fuente. No pudimos indicar Link en css