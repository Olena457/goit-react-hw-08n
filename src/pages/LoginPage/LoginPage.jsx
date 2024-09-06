import { useDispatch } from 'react-redux';

import LoginForm from './../components/LoginForm/LoginForm.jsx';
import { loginOperation } from './../store/auth/operationsAuth.js';

const LoginPage = () => {
  const dispatch = useDispatch();
  const login = userData => {
    dispatch(loginOperation(userData));
  };

  return (
    <div>
      <h2>Login</h2>
      <br />
      <LoginForm submit={login} />
    </div>
  );
};

export default LoginPage;
