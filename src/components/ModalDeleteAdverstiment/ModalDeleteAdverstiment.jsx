import React from 'react';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDeleteAdverstiment } from 'redux/global/globalSlice';
import styles from './ModalDeleteAdverstiment.module.css';
import sprite from '../../images/icons.svg';

const ModalDeleteAdverstiment = () => {
  // const adverstiment=useSelector(selectAdverstiment)
  // const dispatch = useDispatch();

  // const handleDeleteAdverstiment = () => {
  //    // Закрыть модальное окно при нажатии на кнопку
  //    dispatch(closeModalDeleteAdverstiment());
  // };

  return (
    <Modal>
      <div className={styles.deleteModalWrapper}>
        <div class={styles.closeModalIconWrapper}>
          <svg className={styles.closeModalIcon}>
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </div>
        <h2 className={styles.modalTitle}>Delete adverstiment?</h2>
        <p className={styles.modalText}>
          Are you sure you want to delete “Cute dog looking for a home”?
          <br /> You can`t undo this action.
        </p>

        <div className={styles.modalButtonsWrapper}>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={() => dispatch(closeModalLogout())}
            variant={'secondary'}
          >
            Cancel
          </button>
          <button
            className={styles.yesButton}
            type="button"
            // onClick={handleLogOut}
          >
            <div className={styles.buttonContent}>
              <span>Yes</span>
              <svg className={styles.logOutIcon}>
                <use href={sprite + '#icon-trash-2'}></use>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

// ModalDeleteAdverstiment.propTypes = {
//   advarstimentId: PropTypes.string.isRequired,
// };

export default ModalDeleteAdverstiment;
