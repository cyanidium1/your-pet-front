import React from 'react';
import s from './Logout.module.css';
import sprite from '../../images/icons.svg';

const Logout = ({ text, classes }) => {
  // opens Modal/ApproveAction
  return (
    <button className={s[classes]}>
      {text}
      <svg width={24} height={24}>
        <use href={sprite + '#icon-logout'} />
      </svg>
    </button>
  );
};

export default Logout;
