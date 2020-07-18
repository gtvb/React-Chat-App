import React from 'react'

import { Message } from './Message'

import './styles.css'

export const Messages = ({ messages, name }) => {
  return (
    <div className="messages-container">
      {messages.map((message, i) => <Message key={i} message={message} name={name} /> )}
    </div>
  )
}