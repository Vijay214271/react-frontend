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
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 