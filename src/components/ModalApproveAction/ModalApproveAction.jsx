import React from 'react';
import modal from './ModalApproveAction.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { closeModalApproveAction } from 'redux/global/globalSlice';
import Button from 'UI/Button/Button';

const ModalApproveAction = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(data => {
        toast.success(
          `You have successfully logged out. We hope to see you back soon!`
        );
      });
    dispatch(closeModalLogout());
  };

  const handleCloseModal = () => {
    dispatch(closeModalApproveAction());
  };

  return (
    <div className={modal.modalWrapper}>
      <h1 className={modal.modalTitle}>Already leaving?</h1>
      <div className={modal.modalButtonsWrapper}>
        <Button text={'Cancel'} onClick={handleCloseModal} />
        <Button
          text={'Yes'}
          isFilled={true}
          color={'blue'}
          svg={'#icon-logout'}
          onClick={handleLogOut}
        />
      </div>
    </div>
  );
};

export default ModalApproveAction;
