import { Route, Routes } from "react-router-dom";
import Find from "./pages/Find";
import NotFound from "./pages/NotFound";
import "the-new-css-reset/css/reset.css";
import Profile from "./pages/Profile";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import NewsPage from "./pages/NewsPage";
import OurFriendsPage from "./pages/OurFriendsPage";
import NoticesPage from "./pages/NoticesPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import AddPetPage from "./pages/AddPetPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<MainPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="find" element={<Find />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="notices" element={<NoticesPage />}>
          {/* finish  routes */}
          {/* <Route path="sell" index element={<>} />
          <Route path="" element={<>} />
          <Route path="" element={<>} /> */}
        </Route>
        <Route path="user" element={<UserPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
