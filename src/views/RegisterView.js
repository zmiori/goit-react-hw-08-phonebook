import React from 'react';

import s from '../components/AddContactForm/AddContactForm.module.css';

export default function RegisterView() {
  return (
    <div>
      <h1>Register</h1>

      <form
        className={s.wrapper}
        onSubmit={() => {}}
        autoComplete="off"
      >
        <label className={s.formItem}>
          Name
          <input
            type="text"
            name="name"
            // value={}
            // onChange={}
          />
        </label>

        <label className={s.formItem}>
          Email
          <input
            type="email"
            name="email"
            // value={}
            // onChange={}
          />
        </label>

        <label className={s.formItem}>
          Password
          <input
            type="password"
            name="password"
            // value={}
            // onChange={}
          />
        </label>

        <button
          type="submit"
          className={`btn btn-success ${s.formBtn}`}
        >
          Register
        </button>
      </form>
    </div>
  );
}
