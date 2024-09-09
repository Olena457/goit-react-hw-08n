import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshOperation } from './store/auth/operationsAuth.js';
import { selectIsRefreshing } from './store/auth/selectorsAuth.js';
import Loading from './components/Loading/Loading.jsx';
import ToastNotification from './components/ToastNotification/ToastNotification';
import Layout from './components/Layout/Layout.jsx';
import AuthRoute from './components/AuthRoute/AuthRoute.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage/ContactsPage.jsx')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

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

          <Route path="*" element={<div>404</div>} />
        </Routes>
        <ToastNotification />
      </Layout>
    </div>
  );
};

export default App;
