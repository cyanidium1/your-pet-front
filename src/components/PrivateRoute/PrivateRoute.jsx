import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // useLogCheck();
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
