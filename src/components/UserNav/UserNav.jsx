import React from 'react';
import Logout from '../Logout/Logout';
import sprite from '../../images/icons.svg';
import s from './UserNav.module.css';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const UserNav = () => {
  const user = useSelector(selectUser);
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const displayName = user?.name || 'User';
  return (
    <div className={s.userNav}>
      {!isMobile && <Logout text={'Log Out'} classes={'logOut'} />}
      <Link to="/profile">
        <div className={s.user}>
          <svg className={s.userIcon} width={28} height={28}>
            <use href={sprite + '#icon-user-1'} />
          </svg>
          <p className={s.userName}>{displayName}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserNav;
