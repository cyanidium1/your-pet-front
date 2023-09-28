import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './addPetBtn.module.css';
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { openModalAttention } from 'redux/global/globalSlice';
import { selectIsModalAttentionOpen } from 'redux/global/globalSelectors';
import { createPortal } from 'react-dom';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import { Modal } from 'components/Modal/Modal';

const AddPetBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const isModalOpen = useSelector(selectIsModalAttentionOpen);

  const handleClick = () => {
    isAuth ? navigate('/add-pet') : dispatch(openModalAttention());
  };

  return (
    <>
      {isModalOpen &&
        createPortal(
          <Modal>
            <ModalAttention />
          </Modal>,
          document.getElementById('modal')
        )}
      <div className={css.addBtn} onClick={handleClick}>
        Add pet
        <svg width="24px" height="24px" stroke="#fff">
          <use href={`${sprite}#icon-plus-small`}></use>
        </svg>
      </div>
    </>
  );
};

export default AddPetBtn;