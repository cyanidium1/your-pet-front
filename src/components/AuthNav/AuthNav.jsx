import React from "react";
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <p>AuthNav</p>
      <Link to="login">login</Link>
      <Link to="register">register</Link>
    </div>
  );
};

export default AuthNav;
