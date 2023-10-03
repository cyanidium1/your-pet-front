import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import TagsArray from '../components/TagsArray/TagsArray';
import PetList from '../components/PetList/PetList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
} from 'redux/notices/noticeOperations';
import {
  selectAllNotices,
  selectIsNoticesLoading,
} from 'redux/notices/noticeSelectors';
import { useLocation, useSearchParams } from 'react-router-dom';
import { tagsLinkAuth, tagsLinkNotAuth } from 'Utils/constant';
import { toast } from 'react-toastify';
import { hideNotify } from 'redux/addPetNotify/appPetNotifySlice';
import { selectIsNotifyAddPet } from 'redux/addPetNotify/addPetNotifySelectors';
import { closeModalAttention, closeModalDeleteAdverstiment, closeModalPetCardDetails } from 'redux/global/globalSlice';
import { selectIsModalAttentionOpen, selectIsModalDeleteAdverstimentOpen, selectIsModalPetCardDetailsOpen } from 'redux/global/globalSelectors';
import ModalPetCardDetails from 'components/ModalPetCardDetails/ModalPetCardDetails';
import { Modal } from 'components/Modal/Modal';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import ModalDeleteAdverstiment from 'components/ModalDeleteAdverstiment/ModalDeleteAdverstiment';

const NoticesPage = () => {
  // const isModalPetCardDetailsOpen = useSelector(
  //   selectIsModalPetCardDetailsOpen
  // );
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? null;

  const isNoticesLoading = useSelector(selectIsNoticesLoading);

  const { notices } = useSelector(selectAllNotices);
  const isAddedNotify = useSelector(selectIsNotifyAddPet);

  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');
  const notifyAdded = () => {
    toast('Pet added successfully!');
    dispatch(hideNotify());
  };

  useEffect(() => {
    if (tagsLinkNotAuth.includes(categoryPath)) {
      dispatch(
        getAllNoticesThunk({ category: categoryPath, searchQuery: productName })
      );
    }
    if (tagsLinkAuth.includes(categoryPath)) {
      if (categoryPath === tagsLinkAuth[0]) {
        dispatch(getMyFavoriteAdsThunk({ searchQuery: productName }));
      }
      if (categoryPath === tagsLinkAuth[1]) {
        dispatch(getMyAdsThunk({ searchQuery: productName }));
      }
    }
  }, [categoryPath, searchParams]);




  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );


  const handleCloseModalPetCardDetails = () => {
    dispatch(closeModalPetCardDetails());
  };

  const isModalAttentionOpen = useSelector(
    selectIsModalAttentionOpen
  );

  const handleCloseModalAttention = () => {
    dispatch(closeModalAttention());
  };

  const isModalDeleteAdverstimentIsOpen = useSelector(
    selectIsModalDeleteAdverstimentOpen
  );

  const handleCloseModalDeleteAdverstiment = () => {
    dispatch(closeModalDeleteAdverstiment());
  };

  return (
    <>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} titleSearch={'Find your favorite pets'} />
      <TagsArray />
      {!isNoticesLoading && <PetList />}
      isAddedNotify
      {isAddedNotify && notifyAdded()}
      {isModalPetCardDetailsOpen && (
        <Modal closeReducer={handleCloseModalPetCardDetails}>
          <ModalPetCardDetails />
        </Modal>
      )}
      {isModalAttentionOpen && (
        <Modal closeReducer={handleCloseModalAttention}>
          <ModalAttention  />
        </Modal>
      )}
      {isModalDeleteAdverstimentIsOpen && (
        <Modal closeReducer={handleCloseModalDeleteAdverstiment}>
          <ModalDeleteAdverstiment  />
        </Modal>
      )}
    </>
  );
};

export default NoticesPage;
