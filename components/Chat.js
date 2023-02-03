import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from "socket.io-client";
import styles from '../styles/Chat.module.css'
import { useUser } from '@auth0/nextjs-auth0/client';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function Chat() {
  const { user } = useUser();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);
  const [messageTime, setMessageTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}))
  var Filter = require('bad-words'),
    filter = new Filter();

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    setMessageTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}))
    if (user && message) {
      socket.emit('message', { message: filter.clean(message), userEmail: user.email, sentTime: messageTime });
      setMessage('');
    }
  };

  return (
<div className={styles.container}>
  <div className={styles.chatbox}>
    <ul className={styles.messagelist} ref={messageListRef}>
      {messages.map((message, index) => (
                  <li key={index}>
                  {message.userEmail}: {message.message} 
                  <div className={styles.sentTime}>{message.sentTime}</div>
                </li>
      ))}
    </ul>
    <form className={styles.messageform} onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  </div>
</div>
  );
}

export default Chat;
