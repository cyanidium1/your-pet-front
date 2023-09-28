import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import sprite from '../../images/icons.svg';

const AuthNav = ({ closeMenu }) => {
  return (
    <div>
      <nav className={s.authNav}>
        <ul className={s.authNavList}>
          <li onClick={closeMenu}>
            <NavLink className={s.authLogIn} to="login">
              Log IN
              <svg className={s.pawprint}>
                <use href={sprite + '#icon-pawprint-1'} />
              </svg>
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink className={s.authRegister} to="register">
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AuthNav;
