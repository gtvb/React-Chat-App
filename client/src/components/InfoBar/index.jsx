import React from 'react'

import './styles.css'

export const InfoBar = ({ room }) => {
  return (
    <div className="bar">
      <h2>{room}</h2>
      <a href='/'>
        <i className='fas fa-times' />
      </a>
    </div>
  )
}