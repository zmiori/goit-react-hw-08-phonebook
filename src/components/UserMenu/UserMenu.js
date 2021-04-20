import React from 'react';
// import { useSelector } from 'react-redux';

import s from './UserMenu.module.css';
import { connect } from 'react-redux';
import { getAuthUserEmail } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

function UserMenu({ email, onLogoutSubmit }) {
  // const email = useSelector(getAuthUserEmail);

  const handleLogout = e => {
    e.preventDefault();
    onLogoutSubmit();
  };

  return (
    <div className={s.container}>
      <span className={s.email}>Email: {email} </span>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={e => handleLogout(e)}
      >
        Log Out
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    email: getAuthUserEmail(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutSubmit: value => dispatch(logout(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
