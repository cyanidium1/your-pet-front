import FriendItem from 'components/FriendsItem/FriendItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { friendSelector } from 'redux/friends/friendSelector';
import css from './FriendList.module.css';

const FriendList = () => {
  const ourFriends = useSelector(friendSelector);
  console.log(ourFriends);
  return (
    <div className={css.friendWrap}>
      <ul className={css.cardList}>
        {ourFriends?.map(
          ({
            _id,
            title,
            address,
            addressUrl,
            imageUrl,
            phone,
            email,
            workDays,
          }) => (
            <FriendItem
              key={_id}
              id={_id}
              title={title}
              address={address}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              phone={phone}
              email={email}
              workDays={workDays}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default FriendList;
