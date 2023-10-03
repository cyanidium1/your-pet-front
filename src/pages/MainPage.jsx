import Main from 'components/Main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from 'redux/auth/authSlice';
import Cookies from 'js-cookie';

const MainPage = () => {
  const dispatch = useDispatch();
  const productName = Cookies.get('token') || null;
  console.log(productName);
  useEffect(() => {
    if (productName) {
      dispatch(addToken({ token: productName }));
    }
  }, [productName, dispatch]);

  return <Main />;
};

export default MainPage;
