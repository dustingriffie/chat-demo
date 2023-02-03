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
    if (user && message) {
      socket.emit('message', { message: message, userEmail: user.email, sentTime: new Date() });
      setMessage('');
    }
  };

  return (
<div className={styles.container}>
  <div className={styles.chatbox}>
    <ul className={styles.messagelist} ref={messageListRef}>
      {messages.map((message, index) => (
        <li key={index}>{message.userEmail}: {message.message}</li>
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
