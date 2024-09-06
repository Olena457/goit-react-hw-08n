import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoggedIn } from './../../store/auth/selectorsAuth.js';

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
