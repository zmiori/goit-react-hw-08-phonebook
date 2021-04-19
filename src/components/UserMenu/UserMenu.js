import React from 'react';
import s from './UserMenu.module.css';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      {/* <img
        src={avatar}
        alt=""
        width="32"
        style={styles.avatar}
      /> */}
      <span className={s.name}>Email: {}</span>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => {}}
      >
        Log Out
      </button>
    </div>
  );
}
