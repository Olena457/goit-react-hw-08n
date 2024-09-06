import { useSelector } from 'react-redux';
import Navigation from './../Navigation/Navigation.jsx';
import { selectLoggedIn } from './../../store/auth/selectorsAuth.js';
import UserInfo from './../UserInfo/UserInfo.jsx';
import Authorization from './../Autorization/Autorization.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div className="flex jc-sb">
      <Navigation />
      {isLoggedIn ? <UserInfo /> : <Authorization />}
    </div>
  );
};

export default AppBar;
