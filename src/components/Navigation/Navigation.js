import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getAuthIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const Navigation = ({ isLoggedin }) => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    {isLoggedin && (
      <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => {
  return {
    isLoggedin: getAuthIsLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(Navigation);
