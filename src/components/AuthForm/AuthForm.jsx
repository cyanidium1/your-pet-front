import React, { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FcGoogle } from 'react-icons/fc';

import icons from '../../images/icons.svg';
import css from './AuthForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  loginWithGoogle,
  refreshUser,
  register,
} from 'redux/auth/authOperations';
import { openModalCongrats } from 'redux/global/globalSlice';
import { selectUser } from 'redux/auth/authSelectors';
import { addToken } from 'redux/auth/authSlice';

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useSelector(selectUser);
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
            /^(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
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
            /^(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
          )
          .required('Password is required'),
        confirm_password: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });
    }
  };

  const handleLogin = async values => {
    await dispatch(login({ email: values.email, password: values.password }));
    await dispatch(refreshUser()).then(() => navigate('/profile'));
  };

  const handleRegister = values => {
    dispatch(
      register({
        email: values.email,
        password: values.password,
        name: values.name,
      })
    );
    dispatch(openModalCongrats());
    dispatch(refreshUser());
  };
  const productName = searchParams.get('token') || null;
  useEffect(() => {
    const handleAddToken = async () => {
      if (productName) {
        await dispatch(addToken({ token: productName }));
        await dispatch(refreshUser());
      }
    };

    handleAddToken();
  }, [productName, dispatch, setSearchParams]);

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <section className={`${css.auth_page}`}>
      <div className={css.auth_section}>
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
                    className={`${css.auth_input} ${
                      formik.touched.name && formik.errors.name
                        ? css.red_outline
                        : formik.values.name && !formik.errors.name
                        ? css.green_outline
                        : null
                    }`}
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
                  <div className={css.message}>
                    {!formik.errors.name && formik.values.name && (
                      <div className={css.positive}>Name is valid</div>
                    )}
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={css.negative}
                    />
                  </div>
                </div>
              )}
              <div className={css.form_group}>
                <Field
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className={`${css.auth_input} ${
                    formik.touched.email && formik.errors.email
                      ? css.red_outline
                      : formik.values.email && !formik.errors.email
                      ? css.green_outline
                      : null
                  }`}
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
                <div className={css.message}>
                  {!formik.errors.email && formik.values.email && (
                    <div className={css.positive}>Email is valid</div>
                  )}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.negative}
                  />
                </div>
              </div>
              <div className={css.form_group}>
                <Field
                  type={isPasswordShown ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  autoComplete={!isLoginPageOpen ? 'new-password' : 'off'}
                  className={`${css.auth_input} ${
                    formik.touched.password && formik.errors.password
                      ? css.red_outline
                      : formik.values.password && !formik.errors.password
                      ? css.green_outline
                      : null
                  }`}
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
                <div className={css.message}>
                  {!formik.errors.password && formik.values.password && (
                    <div className={css.positive}>Password is secure</div>
                  )}
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.negative}
                  />
                </div>
              </div>
              {!isLoginPageOpen && (
                <div className={css.form_group}>
                  <Field
                    type={isConfirmPasswordShown ? 'text' : 'password'}
                    name="confirm_password"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    className={`${css.auth_input} ${
                      formik.touched.confirm_password &&
                      formik.errors.confirm_password
                        ? css.red_outline
                        : formik.values.confirm_password &&
                          !formik.errors.confirm_password
                        ? css.green_outline
                        : null
                    }`}
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
                  <div className={css.message}>
                    {!formik.errors.confirm_password &&
                      formik.values.confirm_password && (
                        <div className={css.positive}>
                          Passwords are matching
                        </div>
                      )}
                    <ErrorMessage
                      name="confirm_password"
                      component="div"
                      className={css.negative}
                    />
                  </div>
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

                <span>OR</span>
                {/* <button
                  className={css.auth_submit_button}
                  onClick={() => {
                    dispatch(loginWithGoogle());
                  }}
                  type="button"
                >
                  Login with Google
                </button> */}

                <a
                  className={css.auth_submit_button}
                  href="https://your-pet-backend-nci6.onrender.com/api/users/google"
                >
                  <FcGoogle />
                  {!isLoginPageOpen ? 'Register ' : 'Login '}
                  with Google
                </a>

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
      </div>
    </section>
  );
};

export default AuthForm;
