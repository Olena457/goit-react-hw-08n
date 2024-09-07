import { NavLink } from 'react-router-dom';
import css from './Authorization.module.css';
import clsx from 'clsx';

export default function Authorization() {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <>
      <div className={css.conteiner}>
        <NavLink className={activeLink} to="/register">
          Register
        </NavLink>
        <NavLink className={activeLink} to="/login">
          Log In
        </NavLink>
      </div>
    </>
  );
}
