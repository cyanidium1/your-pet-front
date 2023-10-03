import css from './NoticeNotFound.module.css';
import { FcLinux } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import sprite from 'images/icons.svg';

const NoticeNotFound = () => {
  return (
    <div className={css.notFound}>
      <div className={css.imgWrapper}></div>
      <Link to={'/notices/sell'} className={css.backBtn}>
        To main page
        <svg width="24px" height="24px" fill="#fff">
          <use href={`${sprite}#icon-pawprint-1`}></use>
        </svg>
      </Link>
    </div>
  );
};

export default NoticeNotFound;
