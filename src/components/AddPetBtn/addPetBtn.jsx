import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './addPetBtn.module.css';
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import {
  closeModalAttention,
  openModalAttention,
} from 'redux/global/globalSlice';
import { selectIsModalAttentionOpen } from 'redux/global/globalSelectors';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import { Modal } from 'components/Modal/Modal';

const AddPetBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const isModalOpen = useSelector(selectIsModalAttentionOpen);

  const handleClick = () => {
    isAuth ? navigate('/add-pet') : dispatch(openModalAttention());
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModalAttention = () => {
    dispatch(closeModalAttention());
  };

  return (
    <>
      <div className={css.addBtn} onClick={handleClick}>
        Add pet
        <svg width="24px" height="24px" stroke="#fff">
          <use href={`${sprite}#icon-plus-small`}></use>
        </svg>
      </div>
      {isModalOpen && (
        <Modal closeReducer={handleCloseModalAttention}>
          <ModalAttention />
        </Modal>
      )}
    </>
  );
};

export default AddPetBtn;
