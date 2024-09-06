import { useSelector, useDispatch } from 'react-redux';
import { logOutOperation } from './../../store/auth/operationsAuth.js';
import { selectUser } from './../../store/auth/selectorsAuth.js';

const UserInfo = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <div className="flex">
      <p>Welcome, {name}</p>
      <button onClick={handleLogOut}>logOut</button>
    </div>
  );
};

export default UserInfo;
