import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { useState } from 'react';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import {
  closeModalApproveAction,
  openModalApproveAction,
} from 'redux/global/globalSlice';
import { selectIsModalApproveActionOpen } from 'redux/global/globalSelectors';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
export const Card = () => {
  const [editMode, SetEditMode] = useState(false);
  const dispatch = useDispatch(logOut);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const edit = () => SetEditMode(!editMode);

  return (
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <PersonalForm mode={editMode} handleEdit={edit} />
        {!editMode && (
          <div className={scss.logoutblock}>
            <svg className={scss.logout}>
              <use href={`${defualtPhoto}#icon-logout`}></use>
            </svg>
            <span>Log Out</span>
          </div>
        )}
      </div>
      {isModalApproveActionOpen && (
        <Modal closeReducer={handleCloseModalApproveAction}>
          <ModalApproveAction />
        </Modal>
      )}
    </div>
  );
};
