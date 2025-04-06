import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              Services  
              <svg className='drpdwn' width="8" height="4" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '3px', marginTop: '4px' }}>
              <path d="M1.3136 0.75L4.8136 4.25L8.3136 0.75" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 