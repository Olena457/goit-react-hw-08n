import { useDispatch } from 'react-redux';

import RegisterForm from '../../../components/RegisterForm/RegisterForm.jsx';
import { registerOperation } from '../../../store/auth/operationsAuth.js';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const register = userData => {
    dispatch(registerOperation(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      <br />
      <RegisterForm submit={register} />
    </div>
  );
};

export default RegisterPage;
