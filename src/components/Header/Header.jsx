import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';
import Logout from '../Logout/Logout';
import AuthNav from '../AuthNav/AuthNav';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useMedia } from 'react-use';
import { screen } from '../../Utils/screen';
import UserNav from 'components/UserNav/UserNav';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsAuth, selectUser } from 'redux/auth/authSelectors';

const Header = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(selectIsAuth);

  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const isTablet = useMedia(screen.breakpoints.tablet.media);
  const isDesktop = useMedia(screen.breakpoints.desktop.media);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsLoading(true);
      dispatch(refreshUser()).finally(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, isLoggedIn]);

  const closeModalMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className={s.header}>
      <Logo />
      <BurgerMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        closeModalMenu={closeModalMenu}
        isLoggedIn={isLoggedIn}
      />
      {isMobile ? (
        isLoggedIn && <UserNav />
      ) : isLoggedIn ? (
        <UserNav />
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default Header;
