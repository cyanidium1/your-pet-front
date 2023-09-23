import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import icons from "../../images/icons.svg";
import css from "./AuthForm.module.css";

const AuthForm = () => {
  const location = useLocation();
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  useEffect(() => {
    const isLoginPage = location.pathname === "/login";

    setIsLoginPageOpen(isLoginPage);
  }, [location]);

  const handleLogin = () => {};
  const handleRegister = () => {};

  return (
    <section className={`container ${css.auth_section}`}>
      <h1 className={css.form_heading}>
        {isLoginPageOpen ? "Login" : "Registration"}
      </h1>
      <form>
        <div>
          {!isLoginPageOpen && (
            <input name="name" type="text" placeholder="Name" />
          )}
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
          />
          <div>
            <input
              name="password"
              type={isPasswordShown ? "text" : "password"}
              placeholder="Password"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              <svg>
                <use
                  xlinkHref={
                    isPasswordShown
                      ? icons + "#icon-eye-open"
                      : icons + "#icon-eye-closed"
                  }
                ></use>
              </svg>
            </button>
          </div>
          {!isLoginPageOpen && (
            <div>
              <input
                name="confirm-password"
                type={isConfirmPasswordShown ? "text" : "password"}
                placeholder="Confirm password"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() =>
                  setIsConfirmPasswordShown(!isConfirmPasswordShown)
                }
              >
                <svg>
                  <use
                    xlinkHref={
                      isConfirmPasswordShown
                        ? icons + "#icon-eye-open"
                        : icons + "#icon-eye-closed"
                    }
                  ></use>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={isLoginPageOpen ? handleLogin : handleRegister}
            type="submit"
          >
            {isLoginPageOpen ? "Login" : "Register"}
          </button>
          {!isLoginPageOpen ? (
            <p>
              Already have an account <NavLink to="/login">Login</NavLink>
            </p>
          ) : (
            <p>
              Don't have an account? <NavLink to="/register">Register</NavLink>
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
