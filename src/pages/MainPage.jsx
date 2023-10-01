import Main from 'components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { addToken } from 'redux/auth/authSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('token') || null;
  dispatch(addToken({ token: productName }));

  return <Main />;
};

export default MainPage;
