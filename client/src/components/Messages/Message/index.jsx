import React from 'react';

import './styles.css';

export const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className='wrapper' style={{justifyContent: 'flex-end', padding: '0 16px'}}>
          <div className="messageContainer" style={{background: 'rgba(65, 105, 225, 0.8)', color: '#fff'}}>
            <p style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>{trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1)}</p>
            <p style={{fontFamily: 'sans-serif'}}>{text}</p>
          </div>
        </div>
        
        )
        : (
          <div className='wrapper' style={{justifyContent: 'flex-strt', padding: '0 16px'}}>
            <div className="messageContainer" style={{background: '#fff', color: '#000'}}>
              <p style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>{user.charAt(0).toUpperCase() + user.slice(1)}</p>
              <p style={{fontFamily: 'sans-serif'}}>{text}</p>
            </div>
          </div>
        )
  );
}

