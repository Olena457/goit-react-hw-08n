// import { useSelector, useDispatch } from 'react-redux';
// import { logOutOperation } from './../../store/auth/operationsAuth.js';
// import { selectUser } from './../../store/auth/selectorsAuth.js';

// const UserInfo = () => {
//   const { name } = useSelector(selectUser);
//   const dispatch = useDispatch();

//   const handleLogOut = () => {
//     dispatch(logOutOperation());
//   };

//   return (
//     <div className="flex">
//       <p>Welcome, {name}</p>
//       <button onClick={handleLogOut}>logOut</button>
//     </div>
//   );
// };

// export default UserInfo;
import { useDispatch, useSelector } from 'react-redux';
import css from './UserInfo.module.css';
import { logOutOperation } from '../../store/auth/operationsAuth.js';
import { selectUser } from '../../store/auth/selectorsAuth.js';

export default function UserInfo() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <h2 className={css.userName}>
        Welcome,{user.name}.Im your personal phonebook!
      </h2>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(logOutOperation())}
      >
        Logout
      </button>
    </div>
  );
}
