import React from 'react';
import Logout from '../Logout/Logout';
import sprite from '../../images/icons.svg';
import s from './UserNav.module.css';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const UserNav = ({ showMenu }) => {
  const user = useSelector(selectUser);
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const isTablet = useMedia(screen.breakpoints.tablet.media);
  const displayName = user?.name || 'User';
  console.log(showMenu);
  return (
    <div className={s.userNav}>
      {!isMobile && (!isTablet || (isTablet && showMenu)) && (
        <Logout text={'Log Out'} classes={'logOut'} />
      )}
      {isTablet && showMenu ? null : (
        <Link to="/profile">
          <div className={s.user}>
            <svg className={s.userIcon} width={28} height={28}>
              <use href={sprite + '#icon-user-1'} />
            </svg>
            <p className={s.userName}>{displayName}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserNav;
