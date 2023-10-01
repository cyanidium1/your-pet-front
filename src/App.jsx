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
import './App.css';
import Logout from 'components/Logout/Logout';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import ModalDeleteAdverstiment from 'components/ModalDeleteAdverstiment/ModalDeleteAdverstiment';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import ModalPetCardDetails from 'components/ModalPetCardDetails/ModalPetCardDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices">
          <Route path="sell" index element={<NoticesPage />} />
          <Route path="lost-found" element={<NoticesPage />} />
          <Route path="in-good-hands" element={<NoticesPage />} />
          <Route path="favorite-ads" element={<NoticesPage />} />
          <Route path="my-ads" element={<NoticesPage />} />
        </Route>
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="user" element={<UserPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route path="*" element={<NotFound />} />
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
