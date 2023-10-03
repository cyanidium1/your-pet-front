import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDeleteAdverstiment } from 'redux/global/globalSlice';
import styles from './ModalDeleteAdverstiment.module.css';
import Button from 'UI/Button/Button';
import { useLocation } from 'react-use';
import { selectSelectedNotice } from 'redux/notices/noticeSelectors';
import { deleteNoticeThunk } from 'redux/notices/noticeOperations';
import { routerThunk } from 'Utils/constant';
import { useDeleteNoticeMutation } from 'redux/notices/noticeQueryOperation';


const ModalDeleteAdverstiment = ({_id}) => {
  const selectedNotice = useSelector(selectSelectedNotice);
  const { title } = selectedNotice?.notice || {};

  // const selectedNotice = useSelector(selectSelectedNotice);
  // const { title, _id } = selectedNotice?.notice || {};
  // const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const categoryPath = pathname.split('/').slice(-1).join('');

  // const handleDeleteCard = () => {
  //   dispatch(deleteNoticeThunk({ _id, thunk: routerThunk[categoryPath] }));
  //   dispatch(closeModalDeleteAdverstiment());
  //   document.body.style.overflow = 'hidden';
  // };
  const dispatch = useDispatch();
  const [deleteNotices] = useDeleteNoticeMutation();
  const handleDeleteCard = () => {
    deleteNotices(_id);
  };



  const handleCloseModal = () => {
    dispatch(closeModalDeleteAdverstiment());
  };

  return (
    <div className={styles.deleteModalWrapper}>
      <h3 className={styles.modalTitle}>Delete adverstiment?</h3>
      <h4 className={styles.modalText}>
        Are you sure you want to delete{' '}
        <span className={styles.modalTitleToDelete}>"{title}"?</span>
        <br /> You can`t undo this action.
      </h4>

      <div className={styles.modalButtonsWrapper}>
        <Button text={'Cancel'} onClick={handleCloseModal} />
        <Button
          text={'Yes'}
          isFilled={true}
          color={'blue'}
          svg={'#icon-trash'}
          onClick={handleDeleteCard}
        />
      </div>
    </div>
  );
};

export default ModalDeleteAdverstiment;
