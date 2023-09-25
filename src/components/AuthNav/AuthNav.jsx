import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import sprite from "../../images/icons.svg";

const AuthNav = ({ closeMenu }) => {
  return (
    <div>
      <nav className={s.authNav}>
        <ul className={s.authNavList}>
          <li className={s.authLogIn} onClick={closeMenu}>
            <Link to="login">Log IN</Link>
            <svg className={s.pawprint}>
              <use href={sprite + "#icon-pawprint-1"} />
            </svg>
          </li>
          <li className={s.authRegister} onClick={closeMenu}>
            <Link to="register">Registration</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AuthNav;
