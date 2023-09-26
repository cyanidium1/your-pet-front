import React from 'react';
import { Modal } from "components/Modal/Modal";
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import modal from "./ModalAttention.module.css"

const ModalAttention = () => {
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
          <div className={modal.modalAttentionWrapper}>
          <div class={modal.closeModalIconWrapper} >
            <svg className={modal.closeModalIcon}>
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </div>
    
          <p className={modal.modalTitle}>Attention</p>
          <p className={modal.modalText}>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</p>
          <div className={modal.modalButtonsWrapper}>
            <button
              className={modal.logInButton}
              type="button"
              // onClick={() => dispatch(closeModalLogout())}
              variant={'secondary'}
            >
              <div className={modal.buttonContent}>
                <span>Log IN</span>
                <svg className={modal.pawprintIcon}>
                  <use href={sprite + '#icon-pawprint-1'}></use>
                </svg>
              </div>
            </button>
            <button
          className={modal.registrationButton}
          type="button"
        //   onClick={() => dispatch(closeModalLogout())}
          
        >
          Registration
        </button>
          </div>
        </div>
        </Modal>
      );
    };
  
    
 
  
  export default ModalAttention;