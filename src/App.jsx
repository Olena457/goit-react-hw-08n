import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppB from './components/AppB/AppB.jsx';

// import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx';

import { currentOperation } from './store/auth/operationsAuth.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage/RegisterPage.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);

  return (
    <>
      <AppB />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/contacts" element={<ContactsPage />} />
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default App;
