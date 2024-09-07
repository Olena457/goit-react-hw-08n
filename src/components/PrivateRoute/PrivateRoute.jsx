// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import Loading from "../Loading/Loading.jsx"

// import { selectAuth } from '../../store/auth/selectorsAuth.js';

// const PrivateRoute = () => {
//   const { isLoggedIn, token } = useSelector(selectAuth);

//   if (!isLoggedIn && token) {
//     return <Loading/>;
//   }

//   if (!isLoggedIn && !token) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;
