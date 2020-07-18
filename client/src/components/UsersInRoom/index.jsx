import React from 'react'
import './styles.css'



export const UsersInRoom = ({ users }) => {
  return (
    <div className='users-container'>
      <h3>
        <i className='fas fa-users' style={{color: 'royalblue'}} />
        {` `}
        Users in the Room
      </h3>
      <ul style={{margin: 10}}>
        {users.map(user => <li className='list-item' key={user.id}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</li>)}
      </ul>
    </div>
  )
}
