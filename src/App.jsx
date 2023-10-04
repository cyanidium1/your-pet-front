import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import 'the-new-css-reset/css/reset.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
const MainPage = lazy(() => import('./pages/MainPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const Profile = lazy(() => import('./pages/Profile'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const AddPetPage = lazy(() => import('./pages/AddPetPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage')
);
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices/:categoryName" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />

        <Route
          path="/profile"
          element={<PrivateRoute component={Profile} redirectTo="/" />}
        />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="user" element={<UserPage />} />

        <Route
          path="add-pet"
          element={<PrivateRoute component={AddPetPage} redirectTo="/" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
    // <ModalApproveAction/>
    // <ModalDeleteAdverstiment/>
    // <ModalAttention/>
    // <ModalCongrats/>
    // <ModalPetCardDetails/>
  );
};

export default App;
