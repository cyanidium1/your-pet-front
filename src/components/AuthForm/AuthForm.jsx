import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import icons from '../../images/icons.svg';
import css from './AuthForm.module.css';
import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/authOperations';

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  useEffect(() => {
    const isLoginPage = location.pathname === '/login';
    setIsLoginPageOpen(isLoginPage);
  }, [location]);

  const getValidationSchema = () => {
    if (isLoginPageOpen) {
      return Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .max(16, 'Password must be at most 16 characters')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
          )
          .required('Password is required'),
      });
    } else {
      return Yup.object().shape({
        name: Yup.string()
          .min(2, 'Name must be at least 2 characters')
          .max(16, 'Name must be at most 16 characters')
          .required('Name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .max(16, 'Password must be at most 16 characters')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
          )
          .required('Password is required'),
        confirm_password: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });
    }
  };

  const handleLogin = values => {
    dispatch(login({ email: values.email, password: values.password }));
    navigate('/user');
  };

  const handleRegister = values => {
    dispatch(
      register({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    );
    navigate('/user');
  };

  return (
    <section className={`${css.auth_section}`}>
      <h1 className={css.form_heading}>
        {isLoginPageOpen ? 'Login' : 'Registration'}
      </h1>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirm_password: '',
        }}
        validationSchema={getValidationSchema()}
        onSubmit={values => {
          console.log('Form values:', values);
          isLoginPageOpen ? handleLogin(values) : handleRegister(values);
        }}
      >
        {formik => (
          <Form className={css.auth_form}>
            {!isLoginPageOpen && (
              <div className={css.form_group}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={css.auth_input}
                />
                <div className={css.eye_button_positioning}>
                  <span>
                    <svg className={css.svg_sizing} width="24" height="24">
                      <use
                        xlinkHref={
                          formik.errors.name && formik.values.name
                            ? icons + '#icon-crossauth'
                            : formik.values.name
                            ? icons + '#icon-tickauth'
                            : ''
                        }
                      />
                    </svg>
                  </span>
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>
            )}
            <div className={css.form_group}>
              <Field
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                className={css.auth_input}
              />
              <div className={css.eye_button_positioning}>
                <span>
                  <svg className={css.svg_sizing} width="24" height="24">
                    <use
                      xlinkHref={
                        formik.errors.email && formik.values.email
                          ? icons + '#icon-crossauth'
                          : formik.values.email
                          ? icons + '#icon-tickauth'
                          : ''
                      }
                    />
                  </svg>
                </span>
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.form_group}>
              <Field
                type={isPasswordShown ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                autoComplete={!isLoginPageOpen ? 'new-password' : 'off'}
                className={css.auth_input}
              />
              <div className={css.eye_button_positioning}>
                <span>
                  <svg className={css.svg_sizing} width="24" height="24">
                    <use
                      xlinkHref={
                        formik.errors.password && formik.values.password
                          ? icons + '#icon-crossauth'
                          : formik.values.password
                          ? icons + '#icon-tickauth'
                          : ''
                      }
                    />
                  </svg>
                </span>
                <button
                  type="button"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                >
                  <svg className={css.svg_sizing}>
                    <use
                      xlinkHref={
                        isPasswordShown
                          ? icons + '#icon-eye-open'
                          : icons + '#icon-eye-closed'
                      }
                    ></use>
                  </svg>
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>
            {!isLoginPageOpen && (
              <div className={css.form_group}>
                <Field
                  type={isConfirmPasswordShown ? 'text' : 'password'}
                  name="confirm_password"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  className={css.auth_input}
                />
                <div className={css.eye_button_positioning}>
                  <span>
                    <svg className={css.svg_sizing} width="24" height="24">
                      <use
                        xlinkHref={
                          formik.errors.confirm_password &&
                          formik.values.confirm_password
                            ? icons + '#icon-crossauth'
                            : formik.values.confirm_password
                            ? icons + '#icon-tickauth'
                            : ''
                        }
                      />
                    </svg>
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setIsConfirmPasswordShown(!isConfirmPasswordShown)
                    }
                  >
                    <svg className={css.svg_sizing}>
                      <use
                        xlinkHref={
                          isConfirmPasswordShown
                            ? icons + '#icon-eye-open'
                            : icons + '#icon-eye-closed'
                        }
                      ></use>
                    </svg>
                  </button>
                </div>
                <ErrorMessage
                  name="confirm_password"
                  component="div"
                  className={css.error}
                />
              </div>
            )}
            <div
              className={
                isLoginPageOpen
                  ? `${css.end_auth_form} ${css.end_auth_form_login}`
                  : `${css.end_auth_form}`
              }
            >
              <button className={css.auth_submit_button} type="submit">
                {isLoginPageOpen ? 'Login' : 'Register'}
              </button>

              {!isLoginPageOpen ? (
                <p className={css.navtext}>
                  Already have an account <NavLink to="/login">Login</NavLink>
                </p>
              ) : (
                <p className={css.navtext}>
                  Don't have an account?{' '}
                  <NavLink to="/register">Register</NavLink>
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AuthForm;
