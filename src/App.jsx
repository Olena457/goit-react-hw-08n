import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from './components/AppBar/AppBar.jsx';

import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx';

import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import LoginPage from './pages/LoginPage';

import { currentOperation } from './store/auth/operationsAuth.js';
import NotFoundPage from './pages/NotfoundPage/NotFoundPage.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
