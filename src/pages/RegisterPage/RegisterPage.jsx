import { useDispatch } from 'react-redux';

import css from './RegisterPage.module.css';
import RegisterForm from './../../components/RegisterForm/RegisterForm.jsx';
import { registerOperation } from './../../store/auth/operationsAuth.js';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const register = userData => {
    dispatch(registerOperation(userData));
  };

  return (
    <>
      <h2 className={css.title}>Register</h2>
      <RegisterForm submit={register} />
    </>
  );
};

export default RegisterPage;
