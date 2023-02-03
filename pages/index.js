import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true);

  return (
    <div>
      <Navbar />
      {headerVisible ? (
        <header className={styles.header}>
          <div>
            <h1>Welcome to the chat app!</h1>
            <button
              className={`${styles.button} ${styles.darkButton}`}
              onClick={() => setHeaderVisible(false)}
            >
              Start Chatting
            </button>
          </div>
        </header>
      ) : (
        <Chat />
      )}
    </div>
  );
}
