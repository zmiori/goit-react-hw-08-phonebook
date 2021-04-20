import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation/';
import s from './NavBar.module.css';

import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getAuthIsLoggedIn } from '../../redux/auth/auth-selectors';

function NavBar({ isLoggedIn }) {
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

const mapStateToProps = state => {
  return { isLoggedIn: getAuthIsLoggedIn(state) };
};

export default connect(mapStateToProps, null)(NavBar);
