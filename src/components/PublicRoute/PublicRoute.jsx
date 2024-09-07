import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/auth/selectorsAuth.js';
import Navigation from '../Navigation/Navigation.jsx';
import Loading from './../Loading/Loading.jsx';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loading />;
  }

  if (isLoggedIn && token) {
    return <Navigation to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
