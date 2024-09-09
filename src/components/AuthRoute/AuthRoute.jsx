import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selectorsAuth.js';
import Loading from '../Loading/Loading.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';

const AuthRoute = ({ isPrivate }) => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loading />;
  }

  if (isPrivate) {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  } else {
    return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
  }
};

export default AuthRoute;
