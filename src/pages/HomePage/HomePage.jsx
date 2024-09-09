import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FcReading } from 'react-icons/fc';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';

import css from './HomePage.module.css';
import UserInfo from '../../components/UserInfo/UserInfo.jsx';

export default function HomePage() {
  const isLogged = useSelector(selectLoggedIn);

  return (
    <>
      {!isLogged ? (
        <div className={css.container}>
          <h1 className={css.titleRegistr}>
            Welcome to the Phonebook <FcReading />
          </h1>
          <h3 className={css.subTitle}>
            “To begin, please create an account 🚀”
          </h3>
          <Link to="/register" className={css.btn}>
            Register
          </Link>
        </div>
      ) : (
        <div className={css.container}>
          <UserInfo />
        </div>
      )}
    </>
  );
}
