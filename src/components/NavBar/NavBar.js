import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation/';
import s from './NavBar.module.css';

import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

export default function NavBar() {
  const isLoggedIn = false;
  return (
    <header className={s.header}>
      <Navigation />
      <NavLink className={s.navlink} exact to="/">
        <h1 className={s.title}>Phonebook</h1>
      </NavLink>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
