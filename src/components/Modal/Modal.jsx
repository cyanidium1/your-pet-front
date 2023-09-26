import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.css';
import { useEffect } from 'react';
import sprite from '../../images/icons.svg';

const modalContainer = document.getElementById('modal-root');

export const Modal = ({ children, closeReducer }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onCloseModalESC = (e) => {
      if (e.code === 'Escape') {
        dispatch(closeReducer());
      }
    };

    window.addEventListener('keydown', onCloseModalESC);

    return () => {
      window.removeEventListener('keydown', onCloseModalESC);
    };
  }, [closeReducer, dispatch]);

  const onCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(closeReducer());
    }
  };

  const handleCloseModal = () => {
    dispatch(closeReducer());
  };

  return createPortal(
    <div className={styles.backdrop} onClick={onCloseModal}>
      {/* <div className={styles.modalStyled}> */}
      {/* <div class={styles.closeModalButton}>
        <svg className={styles.closeModalIcon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </div> */}
        {children}
      {/* </div> */}
    </div>,
    modalContainer
  );
};

// Modal.propTypes = {
//   children: PropTypes.node.isRequired,
//   closeReducer: PropTypes.func.isRequired,
// };
