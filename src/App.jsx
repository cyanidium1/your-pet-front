import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import 'the-new-css-reset/css/reset.css';
import Profile from './pages/Profile';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import NewsPage from './pages/NewsPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
import NoticesPage from './pages/NoticesPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import AddPetPage from './pages/AddPetPage';
import PageNotFound from './pages/PageNotFound/PaqgeNotFound';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices/:categoryName" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="user" element={<UserPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
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
