import React from 'react';
import modal from './ModalApproveAction.module.css';
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Modal } from 'components/Modal/Modal';


const ModalApproveAction = () => {
  // const user = useSelector(selectUser);
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
    <Modal>
      <div className={modal.modalWrapper}>
      <div class={modal.closeModalIconWrapper} >
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
    </Modal>
  );
};

export default ModalApproveAction;
