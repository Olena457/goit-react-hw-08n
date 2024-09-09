import Navigation from '../Navigation/Navigation.jsx';
import css from './AppB.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';

import Authorization from '../Authorization/Authorization.jsx';

export const AppB = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>
          PhoneBook
          <FcTwoSmartphones style={{ marginLeft: '10px' }} />
        </h2>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <div>{!isLoggedIn && <Authorization />}</div>
    </>
  );
};

export default AppB;
