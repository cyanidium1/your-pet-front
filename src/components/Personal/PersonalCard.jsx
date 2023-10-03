import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { useState } from 'react';
import { logOut } from 'redux/auth/authOperations';
import Logout from 'components/Logout/Logout';

import {
  closeModalApproveAction,
  openModalApproveAction,
} from 'redux/global/globalSlice';
// import { isModalApproveActionOpen } from 'redux/global/globalSelectors';
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
          // <button
          //   type="button"
          //   onClick={handleLogOut}
          //   className={scss.logoutblock}
          // >
          //   <svg className={scss.logout}>
          //     <use href={`${defualtPhoto}#icon-logout`}></use>
          //   </svg>
          //   <span>Log Out</span>
          // </button>
          <Logout text={'Logout'} classes={'cartLogout'} />
        )}
      </div>
      {/* {selectIsModalApproveActionOpen && (
        <Modal closeReducer={closeModalApproveAction}>
          <ModalApproveAction />
        </Modal>
      )} */}
    </div>
  );
};
