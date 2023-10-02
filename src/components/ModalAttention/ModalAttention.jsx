import React from 'react';
import modal from './ModalAttention.module.css';
import Button from 'UI/Button/Button';

const ModalAttention = () => {
  return (
    <div className={modal.modalAttentionWrapper}>
      <h1 className={modal.modalTitle}>Attention</h1>
      <p className={modal.modalText}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={modal.modalButtonsWrapper}>
        <Button
          text={'Log IN'}
          isFilled={true}
          color={'yellow'}
          to="/login"
          svg={'#icon-pawprint-1'}
        />
        <Button
          text={'Registration'}
          isFilled={true}
          color={'white'}
          to="/register"
        />
      </div>
    </div>
  );
};

export default ModalAttention;
