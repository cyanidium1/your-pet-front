import Main from 'components/Main/Main';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { addToken } from 'redux/auth/authSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('token') ?? null;
  if (productName) {
    dispatch(addToken({ token: productName }));
    navigate('/');
  }
  return <Main />;
};

export default MainPage;
