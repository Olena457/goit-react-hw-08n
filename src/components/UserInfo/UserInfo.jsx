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
import avatar from './avatar.png';
import { logOutOperation } from '../../store/auth/operationsAuth.js';
import { selectUser } from '../../store/auth/selectorsAuth.js';
import { Avatar, Button, Toolbar } from '@mui/material';
import { FaSignOutAlt } from 'react-icons/fa';

export default function UserInfo() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={user.name} src={avatar} sx={{ width: 36, height: 36 }} />
      Welcome, {user.name}!
      <Button
        variant="text"
        color="inherit"
        type="button"
        startIcon={<FaSignOutAlt />}
        onClick={() => dispatch(logOutOperation())}
      >
        Log Out
      </Button>
    </Toolbar>
  );
}
