import React from 'react';
import modal from './ModalApproveAction.module.css';
import sprite from '../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';


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

  return (
    <div className={modal.modalWrapper}>
      <div className={modal.closeModalIconWrapper}>
        <svg className={modal.closeModalIcon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </div>

      <p className={modal.modalTitle}>Already leaving?</p>
      <div className={modal.modalButtonsWrapper}>
        <button
          className={modal.cancelButton}
          type="button"
          onClick={() => dispatch(closeModalLogout())}
          variant={'secondary'}
        >
          Cancel
        </button>
        <button
          className={modal.logOutButton}
          type="button"
          onClick={handleLogOut}
        >
          <div className={modal.buttonContent}>
            <span>Yes</span>
            <svg className={modal.logOutIcon}>
              <use href={sprite + '#icon-logout'}></use>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
