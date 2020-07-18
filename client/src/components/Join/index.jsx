import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const Join = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='join-container'>
      <div className='form-container'>
        <form>
          <h1>
            <i className='fas fa-comments' style={{color: 'royalblue'}} />
            {` `}
            UChat
          </h1>
          <input className='input-element' placeholder='Name' onChange={e => setName(e.target.value)} />
          <input className='input-element' placeholder='Room' onChange={e => setRoom(e.target.value)} />

          <Link className='join-link' onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className='join-btn'>Sign in</button>
          </Link>
      </form>
      </div>   
    </div>
  )
}