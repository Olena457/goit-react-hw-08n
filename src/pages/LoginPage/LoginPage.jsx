import { useDispatch } from 'react-redux';
import css from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import { loginOperation } from '../../store/auth/operationsAuth.js';

const LoginPage = () => {
  const dispatch = useDispatch();
  const login = userData => {
    dispatch(loginOperation(userData));
  };

  return (
    <>
      <h2 className={css.title}>Login</h2>
      <br />
      <LoginForm submit={login} />
    </>
  );
};

export default LoginPage;
