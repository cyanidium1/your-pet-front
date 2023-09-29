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

const PetCard = ({ info }) => {
  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );

  const { location, category, age, sex, isFav, file } = info;
  const dynamicStyle = {
    backgroundImage: `url(${file})`,
  };
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModalPetCardDetails());
    console.log('yes');
  };

  const genderIcon = sex === 'male' ? 'icon-male' : 'icon-female';
  return (
    <li className={styles.item}>
      <div className={styles.card} style={dynamicStyle}>
        <div className={styles.topParams}>
          <p className={styles.type}>{category}</p>
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
            <p>{age} year</p>
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
