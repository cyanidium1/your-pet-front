import { useEffect, useState } from 'react';
import styles from './PetCard.module.css';
import sprite from '../../images/icons.svg';
import Button from '../../UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModalPetCardDetails,
  openModalPetCardDetails,
} from 'redux/global/globalSlice';
import { selectIsModalPetCardDetailsOpen } from 'redux/global/globalSelectors';
import ModalPetCardDetails from 'components/ModalPetCardDetails/ModalPetCardDetails';
import { Modal } from 'components/Modal/Modal';
import { selectUser } from 'redux/auth/authSelectors';
import {
  addNoticeToFavoriteThunk,
  removeNoticeToFavoriteThunk,
} from 'redux/notices/noticeOperations';

const PetCard = ({ info }) => {
  const { location, category, age, sex, favorites, file, owner, _id } = info;

  const dispatch = useDispatch();
  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );

  const { user = {} } = useSelector(selectUser) || {};
  const [isFavoriteCard, setisFavoriteCard] = useState(
    favorites.includes(user._id)
  );
  const isUserOwnerAd = owner === user._id;

  const genderIcon = sex === 'male' ? 'icon-male' : 'icon-female';
  const normalAge =
    age < 1 ? `${Math.ceil(age / (1 / 12))} mont` : `${Math.round(age)} years`;

  const dynamicStyle = {
    backgroundImage: `url(${file})`,
  };

  const handleOpenModal = () => {
    dispatch(openModalPetCardDetails());
  };

  const handleToggleFavoriteAds = () => {
    isFavoriteCard
      ? dispatch(removeNoticeToFavoriteThunk(_id)).then(
          setisFavoriteCard(false)
        )
      : dispatch(addNoticeToFavoriteThunk(_id)).then(setisFavoriteCard(true));
  };

  return (
    <li className={styles.item}>
      <div className={styles.card} style={dynamicStyle}>
        <div className={styles.topParams}>
          <p className={styles.type}>{category}</p>
          <div>
            <div
              className={
                isFavoriteCard
                  ? `${styles.heartActiveIcon} ${styles.iconWrap}`
                  : `${styles.heartIcon} ${styles.iconWrap}`
              }
              onClick={handleToggleFavoriteAds}
            >
              <svg className={`${styles.heart} ${styles.icon}`}>
                <use href={sprite + '#icon-heart'} />
              </svg>
            </div>
            {isUserOwnerAd && (
              <div className={`${styles.trashIcon} ${styles.iconWrap}`}>
                <svg className={styles.icon}>
                  <use href={sprite + '#icon-trash-2'} />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className={styles.bottomParams}>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + '#icon-location-1'} />
            </svg>
            <p>
              {location.length > 5 ? location.slice(0, 5) + '...' : location}
            </p>
          </div>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + '#icon-clock'} />
            </svg>
            <p>{normalAge}</p>
          </div>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + '#' + genderIcon} />
            </svg>
            <p>{sex}</p>
          </div>
        </div>
      </div>
      <p className={styles.info}>Сute dog looking for a home</p>
      {isModalPetCardDetailsOpen && (
        <Modal closeReducer={closeModalPetCardDetails}>
          <ModalPetCardDetails />
        </Modal>
      )}
      <div className={styles.btn}>
        <Button text={'Learn more'} onClick={handleOpenModal} />
      </div>
    </li>
  );
};

export default PetCard;
