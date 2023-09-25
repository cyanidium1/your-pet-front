import React from "react";
import { Link, NavLink } from "react-router-dom";
import sprite from "../../images/icons.svg";
import s from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/">
      <svg className={s.logo}>
        <use href={sprite + "#icon-Logo_Mob"} />
      </svg>
    </Link>
  );
}
