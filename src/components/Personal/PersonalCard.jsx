import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { useState } from 'react';
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

  const edit = () => SetEditMode(!editMode);

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
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <div id="photo">
          <button onClick={edit}>
            <svg className={scss.personalPhotoEdit}>
              <use
                href={`${defualtPhoto}#icon-${
                  !editMode ? 'edit' : 'cross-small'
                }`}
              ></use>
            </svg>
          </button>
        </div>
        <PersonalForm mode={editMode} />
        {!editMode && (
          <div className={scss.logoutblock} onClick={handleLogOut}>
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
