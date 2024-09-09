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
// ______________________________________________________
// import Navigation from '../Navigation/Navigation.jsx';
// import css from './AppB.module.css';
// import { FcTwoSmartphones } from 'react-icons/fc';
// import { useSelector } from 'react-redux';
// import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';
// import UserInfo from '../UserInfo/UserInfo.jsx';
// import Authorization from '../Authorization/Authorization.jsx';

// export const AppB = () => {
//   const isLoggedIn = useSelector(selectLoggedIn);

//   return (
//     <>
//       <div className={css.header}>
//         <h2 className={css.title}>
//           PhoneBook
//           <FcTwoSmartphones className={css.styleIcon} />
//         </h2>
//         <Navigation isLoggedIn={isLoggedIn} />
//       </div>
//       <div>{isLoggedIn ? <UserInfo /> : <Authorization />}</div>
//     </>
//   );
// };
// export default AppB;

import Navigation from '../Navigation/Navigation.jsx';
import css from './AppB.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../store/auth/selectorsAuth.js';

import Authorization from '../Authorization/Authorization.jsx';

export const AppB = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>
          PhoneBook
          <FcTwoSmartphones style={{ marginLeft: '10px' }} />
        </h2>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <div>{!isLoggedIn && <Authorization />}</div>
    </>
  );
};

export default AppB;
