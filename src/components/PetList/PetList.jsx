import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAllNotices } from 'redux/notices/noticeSelectors';

import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';
import { Modal } from 'components/Modal/Modal';
import ModalPetCardDetails from 'components/ModalPetCardDetails/ModalPetCardDetails';
import { selectIsModalPetCardDetailsOpen } from 'redux/global/globalSelectors';
import { closeModalPetCardDetails } from 'redux/global/globalSlice';
import {
  addNoticeToFavoriteThunk,
  removeNoticeToFavoriteThunk,
} from 'redux/notices/noticeOperations';
import { selectUser } from 'redux/auth/authSelectors';

const PetList = () => {
  const { notices } = useSelector(selectAllNotices);
  

  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModalPetCardDetails());
  };
  
  return (
    <>
      <ul className={styles.list}>
        {notices &&
          notices?.map(el => (
            <PetCard
              key={el._id}
              info={el}
        
            />
          ))}
      </ul>
      {isModalPetCardDetailsOpen && (
        <Modal closeReducer={handleCloseModal}>
          <ModalPetCardDetails
          />
        </Modal>
      )}
    </>
  );
};

export default PetList;
