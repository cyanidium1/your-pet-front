import React from 'react';
import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import modal from './ModalAttention.module.css';
import { closeModalAttention } from 'redux/global/globalSlice';
import { Link } from 'react-router-dom';

const ModalAttention = () => {
  
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModalAttention());
  };

  return (
    <div className={modal.modalAttentionWrapper}>
      <div className={modal.closeModalIconWrapper} onClick={handleCloseModal}>
        <svg className={modal.closeModalIcon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </div>

      <p className={modal.modalTitle}>Attention</p>
      <p className={modal.modalText}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={modal.modalButtonsWrapper}>
        <button className={modal.logInButton} type="button">
          <Link to="/login" className={modal.buttonContent}>
            <span>Log IN</span>
            <svg className={modal.pawprintIcon}>
              <use href={sprite + '#icon-pawprint-1'}></use>
            </svg>
          </Link>
        </button>
        <button className={modal.registrationButton} type="button">
          <Link to="/register" className={modal.buttonContent}>
            Registration
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ModalAttention;
