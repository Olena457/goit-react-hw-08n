import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading.jsx';
import {
  selectIsRefreshing,
  selectLoggedIn,
} from './store/auth/selectorsAuth.js';
import { refreshOperation } from './store/auth/operationsAuth.js';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
import Layout from './components/Layout/Layout.jsx';
import AuthRoute from './components/AuthRoute/AuthRoute.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import UserInfo from './components/UserInfo/UserInfo.jsx';
// import Authorization from './components/Authorization/Authorization.jsx';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage/ContactsPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    dispatch(refreshOperation());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthRoute isPrivate={false} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<AuthRoute isPrivate={true} />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastNotification />
      </Layout>
    </div>
  );
};

export default App;
