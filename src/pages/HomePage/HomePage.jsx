// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { FcReading } from 'react-icons/fc';
// import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
// import css from './HomePage.module.css';

// export default function HomePage() {
//   const isLogged = useSelector(selectLoggedIn);

//   return (
//     <>
//       {!isLogged ? (
//         <div className={css.container}>
//           <h1 className={css.title}>
//             "Welcome to the Phonebook <FcReading />"
//           </h1>
//           <h3 className={css.subTitle}>
//             “To begin, please create an account 🚀”
//           </h3>
//           <Link to="/register" className={css.btn}>
//             Register
//           </Link>
//         </div>
//       ) : (
//         <UserInfo />
//       )}
//     </>
//   );
// }
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FcReading } from 'react-icons/fc';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLogged = useSelector(selectLoggedIn);

  return (
    <>
      {!isLogged && (
        <div className={css.container}>
          <h1 className={css.title}>
            "Welcome to the Phonebook <FcReading />"
          </h1>
          <h3 className={css.subTitle}>
            “To begin, please create an account 🚀”
          </h3>
          <Link to="/register" className={css.btn}>
            Register
          </Link>
        </div>
      )}
    </>
  );
}

{
  /* // 
//         <div className={css.container}>
//           <h1 className={css.title}>
//             "Welcome back to the Phonebook <FcReading />"
//           </h1>
//           <h3 className={css.subTitle}>
//             “You are logged in. Explore your contacts!”
//           </h3>
//           <Link to="/contacts" className={css.btn}>
//             Go to Contacts
//           </Link>
//         </div> */
}
