import { NavLink } from 'react-router-dom';
import css from './Authorization.module.css';
import clsx from 'clsx';

export default function Authorization() {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <>
      <div className={css.container}>
        <NavLink className={activeLink} to="/register" />
        <NavLink className={activeLink} to="/login" />
      </div>
    </>
  );
}
