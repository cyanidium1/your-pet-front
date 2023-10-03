import { useDispatch } from 'react-redux';

import React, { useEffect } from 'react';
import { fetchFriends } from 'redux/friends/friendOperation';
import css from './OurFriendsPage.module.css';
import FriendList from 'components/FriendList/FriendList';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <>
      <h3 className={css.title}>Our friends</h3>
      <FriendList />
    </>
  );
};

export default OurFriendsPage;
