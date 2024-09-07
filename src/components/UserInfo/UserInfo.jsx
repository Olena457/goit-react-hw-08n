import { useSelector, useDispatch } from 'react-redux';
import { logOutOperation } from './../../store/auth/operationsAuth.js';
import { selectUser } from './../../store/auth/selectorsAuth.js';
import { FcOnlineSupport } from 'react-icons/fc';
import css from './UserInfo.module.css';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.userName}>
        Welcome, {user.name}. I am
        <FcOnlineSupport /> your personal phonebook!
      </h2>
      <button type="button" className={css.btn} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
