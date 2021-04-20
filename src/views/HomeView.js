import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  getAuthIsLoggedIn,
  getAuthUserName,
} from '../redux/auth/auth-selectors';

import Container from '../components/Container';

function HomeView({ name, isLoggedIn }) {
  return (
    <Container>
      {isLoggedIn ? (
        <div>
          <p className="display-4 text-center">
            {' '}
            Welcome to Phonebook, {name}!
          </p>
        </div>
      ) : (
        <div>
          <p className="display-4 text-center">Welcome to Phonebook!</p>
          <p className="display-6 text-center">
            Please{' '}
            <NavLink
              to="/register"
              className=""
              activeClassName="font-weight-bold"
            >
              register
            </NavLink>{' '}
            or{' '}
            <NavLink
              to="/login"
              className=""
              // activeClassName="font-weight-bold"
            >
              login
            </NavLink>{' '}
            to start
          </p>
        </div>
      )}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    name: getAuthUserName(state),
    isLoggedIn: getAuthIsLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(HomeView);
