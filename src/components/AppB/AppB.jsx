import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation.jsx';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Authorization from '../Authorization/Authorization.jsx';
import css from './AppB.module.css';

export const AppB = () => {
  const { isLoggedIn } = useSelector(selectLoggedIn);

  return (
    <>
      <header className={css.header}>
        <>
          <h2 className={css.title}>PhoneBook</h2>
        </>
        <Navigation />
        {isLoggedIn ? <UserInfo /> : <Authorization />}
      </header>
    </>
  );
};
export default AppB;
