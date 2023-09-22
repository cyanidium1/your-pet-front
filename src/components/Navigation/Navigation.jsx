import React from "react";
import s from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={s.list}>
      {/* remove to shared??? */}
      {/* <Link to="/">Your_pet_logo</Link> */}
      <Link to="/news">News</Link>
      <Link to="/notices">Find pet</Link>
      <Link to="/friends">Our friends</Link>
      <Link to="/profile">Profile_name</Link>
    </nav>
  );
};

export default Navigation;
