import React from 'react';
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

const PetCard = ({ info }) => {
  const { location, category, age, sex, isFav, file, owner } = info;

  const dispatch = useDispatch();
  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );

  const { user } = useSelector(selectUser);
  const isUserOwnerAd = owner === user._id;

  const dynamicStyle = {
    backgroundImage: `url(${file})`,
  };

  const handleOpenModal = () => {
    dispatch(openModalPetCardDetails());
  };

  const genderIcon = sex === 'male' ? 'icon-male' : 'icon-female';
  const normalAge =
    age < 1 ? `${Math.ceil(age / (1 / 12))} mont` : `${Math.round(age)} years`;
  return (
    <li className={styles.item}>
      <div className={styles.card} style={dynamicStyle}>
        <div className={styles.topParams}>
          <p className={styles.type}>{category}</p>
          <div>
            <div
              className={
                isFav
                  ? `${styles.heartIcon} ${styles.iconWrap}`
                  : `${styles.heartIcon} ${styles.iconWrap}`
              }
            >
              <svg className={styles.icon}>
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
