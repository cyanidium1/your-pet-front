import React from 'react';
import sprite from '../../images/icons.svg';
import modal from './ModalCongrats.module.css';
import { Link } from 'react-router-dom';

const ModalCongrats = () => {
  return (
    <div className={modal.modalCongratsWrapper}>
      <div class={modal.closeModalIconWrapper}>
        <svg className={modal.closeModalIcon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </div>

      <p className={modal.modalTitle}>Congrats!</p>
      <p className={modal.modalText}>Your registration is success</p>
      <div className={modal.modalButtonsWrapper}>
        <Link to="/profile">
          <button className={modal.goToProfileButton} type="button">
            <div className={modal.buttonContent}>
              <span>Go to profile</span>
              <svg className={modal.pawprintIcon}>
                <use href={sprite + '#icon-pawprint-1'}></use>
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModalCongrats;
