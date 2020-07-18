import React from 'react'
import './styles.css'

export const Input = ({ sendMessage, message, setMessage }) => {
  return (
    <div className='ui-container'>
      <input 
        type="text" 
        placeholder='Message' 
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} 
        value={message} 
        className='send-input' 
      />
      <button className='send-btn' onClick={e => sendMessage(e)}>Send</button>
    </div>
  )
}
