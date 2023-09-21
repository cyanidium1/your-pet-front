import React from "react";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import AuthNav from "../AuthNav/AuthNav";

const Header = () => {
  // example
  const logged = false;
  return (
    <header className={s.header}>
      {/* make custom styled component Logo instead of div */}
      <Link to="/main">
        <div className="make-styled-logo">
          <span role="img" aria-label="logo">
            🐈‍
          </span>
          Pet blabla name
        </div>
      </Link>
      <Navigation />
      {logged ? <Logout /> : <AuthNav />}
    </header>
  );
};

export default Header;
