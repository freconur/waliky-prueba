import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot as local } from "@fortawesome/free-solid-svg-icons";
import './walikyLocation.css'
const WalikyLocation = () => {
  return (
    <div className='location'>
      <div>
        <FontAwesomeIcon icon={local}  />
        <span>Jiron Conima mz I lote 3</span>
      </div>
    </div>
  )
}

export {WalikyLocation}