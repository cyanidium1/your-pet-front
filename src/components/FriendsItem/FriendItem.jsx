import React, { useState } from 'react';
import css from './FriendItem.module.css';
import TimePicker from 'components/TimePicker/TimePicker';

const FriendItem = ({
  _id,
  title,
  address,
  addressUrl,
  imageUrl,
  phone,
  email,
  workDays,
}) => {
  const [isTruncated, setIsTruncated] = useState(true);

  return (
    <li className={css.item} key={_id}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.itemWrap}>
        <div className={css.imgWrap}>
          <img className={css.img} src={imageUrl} alt={title} />
        </div>

        <div className={css.descrWrap}>
          <p className={css.subtitle}>Time:</p>
          <TimePicker
            className={css.timePicker}
            timeOptions={workDays}
            menuZIndex={100}
          />
          <p className={css.subtitle}>Address:</p>
          <a
            className={isTruncated ? css.truncate : css.value}
            href={addressUrl ? addressUrl : 'website only'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address ? address : 'website only'}
          </a>

          <p className={css.subtitle}>Phone:</p>
          <a className={css.value} href={`tel:${phone ? phone : 'email only'}`}>
            {phone ? phone : 'email only'}
          </a>
          <p className={css.subtitle}>Email:</p>
          <a
            className={css.value}
            href={`mailto:${email ? email : 'phone only'}`}
          >
            {email ? email : 'phone only'}
          </a>
        </div>
      </div>
    </li>
  );
};

export default FriendItem;
