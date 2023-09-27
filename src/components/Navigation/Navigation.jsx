import React from 'react';
import s from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';
import AuthNav from 'components/AuthNav/AuthNav';
import { screen } from 'Utils/screen';
import Logout from 'components/Logout/Logout';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import UserNav from 'components/UserNav/UserNav';

const Navigation = ({ showMenu, closeMenu }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  return (
    <nav className={s.navList}>
      <ul className={showMenu ? [s.menu, s.activeMenu].join(' ') : [s.menu]}>
        {/* {showMenu && isMobile && isLoggedIn && <UserNav />} */}
        {isMobile && !isLoggedIn && <AuthNav closeMenu={closeMenu} />}

        <li onClick={closeMenu}>
          <NavLink className={s.navItem} to="/news">
            News
          </NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink className={s.navItem} to="/notices/sell">
            Find pet
          </NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink className={s.navItem} to="/friends">
            Our friends
          </NavLink>
        </li>
        {isMobile && isLoggedIn && (
          <Logout text={'Log Out'} classes={'logOut'} />
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
