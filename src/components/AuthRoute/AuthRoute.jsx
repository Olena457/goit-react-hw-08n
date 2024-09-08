import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selectorsAuth.js';
import Loading from '../Loading/Loading.jsx';

const AuthRoute = ({ isPrivate }) => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loading />;
  }

  if (isPrivate) {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  } else {
    return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
  }
};

export default AuthRoute;
