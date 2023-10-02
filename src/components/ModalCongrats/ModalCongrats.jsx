import React from 'react';
import modal from './ModalCongrats.module.css';
import Button from 'UI/Button/Button';
import { Modal } from 'components/Modal/Modal';

const ModalCongrats = ({ setIsModalCongratsOpen }) => {
  return (
    <Modal closeReducer={() => setIsModalCongratsOpen(false)}>
      <div className={modal.modalCongratsWrapper}>
        <h1 className={modal.modalTitle}>Congrats!</h1>
        <h2 className={modal.modalText}>Your registration is success</h2>
        <div className={modal.modalButtonsWrapper}>
          <Button
            text={'Go to profile'}
            isFilled={true}
            color={'blue'}
            svg={'#icon-pawprint-white'}
            to="/profile"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalCongrats;
