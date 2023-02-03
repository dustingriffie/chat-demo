import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {
    const { user, error, isLoading } = useUser();
  return (
    <nav className={`${styles.navbar} ${styles.darkBackground}`}>
      <Link href="/" className={styles.brand}>
        Chat App
      </Link>
      <ul className={styles.navList}>

        {!user ? (<li className={styles.navItem}>
          <Link href="../api/auth/login" className={styles.navLink}>
            Login
          </Link>
        </li>) : (
        
        <li className={styles.navItem}>
          <Link href="../api/auth/logout" className={styles.navLink}>
            Logout
          </Link>
          </li>)}

      </ul>
    </nav>
  );
};

export default Navbar;
