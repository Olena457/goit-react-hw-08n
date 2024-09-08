// import { useSelector } from 'react-redux';
// import Navigation from '../Navigation/Navigation.jsx';
// import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
// import UserInfo from '../UserInfo/UserInfo.jsx';
// import Authorization from '../Authorization/Authorization.jsx';
// import css from './AppB.module.css';
// import { FcTwoSmartphones } from 'react-icons/fc';
// import AuthRoute from '../AuthRoute/Authroute.jsx';

// export const AppB = () => {
//   const { isLoggedIn } = useSelector(selectLoggedIn);

//   return (
//     <div className={css.header}>
//       <h2 className={css.title}>
//         PhoneBook <FcTwoSmartphones />
//       </h2>
//       <Navigation />
//       {isLoggedIn ? <UserInfo /> : <Authorization />}
//       <AuthRoute isPrivate={true} />
//       <AuthRoute isPrivate={false} />
//     </div>
//   );
// };

// export default AppB;
// _____________________________________________________________
// import { useSelector } from 'react-redux';
// import Navigation from '../Navigation/Navigation.jsx';
// import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
// import UserInfo from '../UserInfo/UserInfo.jsx';
// import Authorization from '../Authorization/Authorization.jsx';
// import css from './AppB.module.css';
// import { FcTwoSmartphones } from 'react-icons/fc';

// export const AppB = () => {
//   const isLoggedIn = useSelector(selectLoggedIn);

//   return (
//     <>
//       <header className={css.header}>
//         <>
//           <h2 className={css.title}>
//             PhoneBook
//             <FcTwoSmartphones className={css.styleIcon} />
//           </h2>
//         </>
//         <Navigation />
//         {isLoggedIn ? <UserInfo /> : <Authorization />}
//       </header>
//     </>
//   );
// };

// export default AppB;
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppB.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Authorization from '../Authorization/Authorization.jsx';

export const AppB = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>
          PhoneBook
          <FcTwoSmartphones className={css.styleIcon} />
        </h2>
        <Navigation />
        <div>{isLoggedIn ? <UserInfo /> : <Authorization />}</div>
      </div>
    </>
  );
};

export default AppB;
// return (
//     <div className={css.header}>
//       <h2 className={css.title}>
//         PhoneBook
//         <FcTwoSmartphones className={css.styleIcon} />
//       </h2>
//       <div className={css.navigation}>
//         <Navigation />
//       </div>
//       <div className={css.auth}>
//         {isLoggedIn ? <UserInfo /> : <Authorization />}
//       </div>
//     </div>
//   );
// };

// export default AppB;
