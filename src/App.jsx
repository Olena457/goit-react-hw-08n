import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loading from './components/Loading/Loading.jsx';
import { selectIsRefreshing } from './store/auth/selectorsAuth.js';
import { refreshOperation } from './store/auth/operationsAuth.js';

import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
import Layout from './components/Layout/Layout.jsx';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage/ContactsPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);

import AuthRoute from './components/AuthRoute/AuthRoute.jsx';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshOperation());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthRoute isPrivate={false} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<AuthRoute isPrivate={true} />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastNotification />
      </Layout>
    </div>
  );
};

export default App;

// _____________________________________________________________________
// export default App;
// //   return isRefreshing ? (
// //     <Loading />
// //   ) : (
// //     <div>
// //       <Layout>
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <PublicRoute redirectTo="/register" component={<loginPage />} />
// //           <Route
// //             path="/register"
// //             element={
// //               <PrivateRoute
// //                 redirectTo="/contacts"
// //                 component={<RegisterPage />}
// //               />
// //             }
// //           />
// //           <Route
// //             path="/login"
// //             element={
// //               <PrivateRoute redirectTo="/contacts" component={<LoginPage />} />
// //             }
// //           />
// //           <Route
// //             path="/contacts"
// //             element={
// //               <PublicRoute redirectTo="/login" component={<ContactsPage />} />
// //             }
// //           />
// //           <Route path="*" element={<NotFoundPage />} />
// //         </Routes>
// //       </Layout>
// //       <ToastNotification />
// //     </div>
// //   );
// // };
// // export default App;
// // __________________________________________
// //   return isRefreshing ? (
// //     <Loading />
// //   ) : (
// //     <div>
// //       <Layout>
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route element={<PublicRoute />}>
// //             <Route path="/login" element={<LoginPage />} />
// //             <Route path="/register" element={<RegisterPage />} />
// //           </Route>
// //           <Route element={<PrivateRoute />}>
// //             <Route path="/contacts" element={<ContactsPage />} />
// //           </Route>
// //           <Route path="*" element={<NotFoundPage />} />
// //         </Routes>
// //         <ToastNotification />
// //       </Layout>
// //     </div>
// //   );
// // };

// // export default App;
