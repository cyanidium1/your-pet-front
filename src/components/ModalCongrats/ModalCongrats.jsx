import React from 'react';
import { Modal } from "components/Modal/Modal";
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import modal from "./ModalCongrats.module.css"

const ModalCongrats = () => {
    // const user = useSelector(selectUser);
    // const dispatch = useDispatch();
  
    // const handleLogOut = () => {
    //   dispatch(logOut())
    //     .unwrap()
    //     .then(data => {
    //       toast.success(
    //         `You have successfully logged out. We hope to see you back soon!`
    //       );
    //     });
    //   dispatch(closeModalLogout());
    return (
        <Modal>
          <div className={modal.modalCongratsWrapper}>
          <div class={modal.closeModalIconWrapper} >
            <svg className={modal.closeModalIcon}>
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </div>
    
          <p className={modal.modalTitle}>Congrats!</p>
          <p className={modal.modalText}>Youre registration is success</p>
          <div className={modal.modalButtonsWrapper}>
            <button
              className={modal.goToProfileButton}
              type="button"
              // onClick={() => dispatch(closeModalLogout())}
              variant={'secondary'}
            >
              <div className={modal.buttonContent}>
                <span>Go to profile</span>
                <svg className={modal.pawprintIcon}>
                  <use href={sprite + '#icon-pawprint-1'}></use>
                </svg>
              </div>
            </button>
          </div>
        </div>
        </Modal>
      );
    };
  
    
 
  
  export default ModalCongrats;