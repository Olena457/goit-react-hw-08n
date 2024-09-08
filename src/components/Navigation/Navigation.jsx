// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import css from '../Navigation/Navigation.module.css';
// import { selectLoggedIn } from './../../store/auth/selectorsAuth.js';

// export const Navigation = () => {
//   function getClassActiveLink({ isActive }) {
//     return clsx(css.link, isActive && css.active);
//   }

//   const isLoggedIn = useSelector(selectLoggedIn);

//   return (
//     <>
//       <div className={css.conteiner}>
//         <NavLink className={activeLink} to="/contacts">
//           Register
//         </NavLink>
//         <NavLink className={activeLink} to="/login">
//           login
//         </NavLink>
//       </div>
//     </>
//   );
// };
// export default Navigation;

// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import css from '../Navigation/Navigation.module.css';
// import { selectLoggedIn } from './../../store/auth/selectorsAuth.js';

// export const Navigation = () => {
//   function activeLink({ isActive }) {
//     return clsx(css.link, isActive && css.active);
//   }

//   const isLoggedIn = useSelector(selectLoggedIn);

//   return (
//     <>
//       <div className={css.container}>
//         <NavLink className={activeLink} to="/">
//           Home
//         </NavLink>

//         {isLoggedIn && (
//           <NavLink className={activeLink} to="/contacts">
//             Contacts
//           </NavLink>
//         )}
//         {!isLoggedIn && (
//           <>
//             <NavLink className={activeLink} to="/register">
//               Register
//             </NavLink>
//             <NavLink className={activeLink} to="/login">
//               Login
//             </NavLink>
//           </>
//         )}
//       </div>
//     </>
//   );
// };
// export default Navigation;
// import { useSelector } from 'react-redux';
// import { selectLoggedIn } from './../../store/auth/selectorsAuth.js';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

export default function Navigation() {
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
