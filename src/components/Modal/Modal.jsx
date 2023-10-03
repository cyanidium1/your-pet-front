import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { useEffect } from 'react';
import Button from 'UI/Button/Button';
import { useDispatch } from 'react-redux';

const modalContainer = document.getElementById('modal');

export const Modal = ({ children, closeReducer }) => {
  useEffect(() => {
    const onCloseModalESC = e => {
      if (e.code === 'Escape') {
        closeReducer();
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('keydown', onCloseModalESC);

    return () => {
      window.removeEventListener('keydown', onCloseModalESC);
    };
  }, [closeReducer]);

  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      closeReducer();
      document.body.style.overflow = 'auto';
    }
  };

  const handleCloseModal = () => {
    closeReducer();
    document.body.style.overflow = 'auto';
  };

  return createPortal(
    <div className={styles.backdrop} onClick={onCloseModal}>
      <div className={styles.modalStyled}>
        <div className={styles.closeModalButton}>
          <Button
            svg={'#icon-cross'}
            onClick={handleCloseModal}
            color={'cross'}
            isFilled={true}
          />
        </div>
        {children}
      </div>
    </div>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeReducer: PropTypes.func.isRequired,
};
