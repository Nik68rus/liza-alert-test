import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../utils/data';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavLink to={Paths.HOME} activeClassName={styles.active} exact>Hacker News</NavLink>
      </div>
    </header>
  );
}

export default Header;
