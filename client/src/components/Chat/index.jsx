import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import './styles.css'

import { InfoBar } from '../InfoBar';
import { Messages } from '../Messages';
import { Input } from "../Input";
import { UsersInRoom } from "../UsersInRoom";

let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  useEffect(() => {
    socket.on('roomData', (room) => {
      setUsers(room.users)
      console.log(room)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <InfoBar room={room} />
        <div className='area'>
          <Messages messages={messages} name={name} />
          <UsersInRoom users={users} />
        </div>
      <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />  
    </div>
  );
}

