import css from '../HomePage/HomePage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
import UserInfo from '../../components/UserInfo/UserInfo.jsx';
import { FcReading } from 'react-icons/fc';

export default function HomePage() {
  const isLogged = useSelector(selectLoggedIn);
  return (
    <div className={css.container}>
      {!isLogged && (
        <>
          <h1 className={css.title}>
            "Welcome to the Phonebook
            <FcReading />"
          </h1>
          <h3>“To begin, please create an account 🚀”</h3>
          <Link to="/register" className={css.btn}>
            Register
          </Link>
        </>
      )}
      {isLogged && <UserInfo />}
    </div>
  );
}
