import { useSelector, useDispatch } from 'react-redux';
import { logOutOperation } from './../../store/auth/operationsAuth.js';
import { selectUser } from './../../store/auth/selectorsAuth.js';
import css from './UserInfo.module.css';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <div className={css.container}>
      <h4 className={css.subTitle}>Go to contacts🚀</h4>
      <h2 className={css.titleLogin}>
        Welcome, {user.name}. I am your personal phone book!
      </h2>
      <button type="button" className={css.btn} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
