import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserInfo from '../../components/UserInfo/UserInfo.jsx';
import { FcReading } from 'react-icons/fc';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';

export default function HomePage() {
  const isLogged = useSelector(selectLoggedIn);
  return (
    <>
      {!isLogged && (
        <div className={css.container}>
          <h1 className={css.title}>
            "Welcome to the Phonebook
            <FcReading />"
          </h1>
          <h3 className={css.subTitle}>
            “To begin, please create an account 🚀”
          </h3>
          <Link to="/register" className={css.btn}>
            Register
          </Link>
        </div>
      )}
      {isLogged && <UserInfo />}
    </>
  );
}
