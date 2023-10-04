import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // useLogCheck();
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  return !isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
