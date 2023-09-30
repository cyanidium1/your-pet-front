import { useDispatch } from 'react-redux';
import FriendList from '../components/FriendList/FriendList';
import React, { useEffect } from 'react';
import { fetchFriends } from 'redux/friends/friendOperation';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <>
      <FriendList />
    </>
  );
};

export default OurFriendsPage;
