import React from 'react';
import s from './Logout.module.css';
import sprite from '../../images/icons.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModalApproveAction,
  openModalApproveAction,
} from 'redux/global/globalSlice';
import { selectIsModalApproveActionOpen } from 'redux/global/globalSelectors';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import { Modal } from 'components/Modal/Modal';

const Logout = ({ text, classes }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(openModalApproveAction());
    document.body.style.overflow = 'hidden';
  };

  const isModalApproveActionOpen = useSelector(selectIsModalApproveActionOpen);

  const handleCloseModalApproveAction = () => {
    dispatch(closeModalApproveAction());
  };
  return (
    <>
      {isModalApproveActionOpen && (
        <Modal closeReducer={handleCloseModalApproveAction}>
          <ModalApproveAction />
        </Modal>
      )}

      <button className={s[classes]} onClick={handleLogOut}>
        {text}
        <svg width={24} height={24}>
          <use href={sprite + '#icon-logout'} />
        </svg>
      </button>
    </>
  );
};

export default Logout;
