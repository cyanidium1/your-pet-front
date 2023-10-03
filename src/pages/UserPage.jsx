import { Modal } from 'components/Modal/Modal';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectisModalCongratsOpen } from 'redux/global/globalSelectors';
import { closeModalCongrats } from 'redux/global/globalSlice';

const UserPage = () => {
  const dispatch = useDispatch();
  const isModalCongratsOpen = useSelector(selectisModalCongratsOpen);
  const handleCloseModalCongrats = () => {
    dispatch(closeModalCongrats());
  };
  return (
    <>
      <div>User Page</div>
      {isModalCongratsOpen && (
        <Modal closeReducer={handleCloseModalCongrats}>
          <ModalCongrats />
        </Modal>
      )}
      ;
    </>
  );
};

export default UserPage;
