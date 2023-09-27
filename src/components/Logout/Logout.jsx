import React from 'react';
import s from './Logout.module.css';
import sprite from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const Logout = ({ text, classes }) => {
  const dispatch = useDispatch(logOut);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Link to="/">
      <button className={s[classes]} onClick={handleLogOut}>
        {text}
        <svg width={24} height={24}>
          <use href={sprite + '#icon-logout'} />
        </svg>
      </button>
    </Link>
  );
};

export default Logout;
