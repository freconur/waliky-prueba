import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as menuBurger } from '@fortawesome/free-solid-svg-icons'
import './menuBurger.css'
const MenuBurger = () => {
  return (
    <div className='menu-burger'>
        <FontAwesomeIcon className='menu-burger__icon' icon={menuBurger} />
    </div>
  )
}

export {MenuBurger}