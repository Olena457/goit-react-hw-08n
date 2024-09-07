import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from '../Navigation/Navigation.module.css';
import { selectLoggedIn } from './../../store/auth/selectorsAuth.js';

export const Navigation = () => {
  function getClassActiveLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <nav>
        <div className={css.header}>
          <NavLink className={getClassActiveLink} to="/">
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink className={getClassActiveLink} to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navigation;
