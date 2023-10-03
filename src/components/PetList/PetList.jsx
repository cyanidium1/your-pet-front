import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';
import { Modal } from 'components/Modal/Modal';
import ModalPetCardDetails from 'components/ModalPetCardDetails/ModalPetCardDetails';
import { selectIsModalPetCardDetailsOpen } from 'redux/global/globalSelectors';
import { closeModalPetCardDetails } from 'redux/global/globalSlice';
import {
  useGetAllNoticeQuery,
  useGetMyAdsQuery,
  useGetMyFavoriteQuery,
} from 'redux/notices/noticeQueryOperation';
import { tagsLinkNotAuth } from 'Utils/constant';

const PetList = ({ searchQuery }) => {
  const isModalPetCardDetailsOpen = useSelector(
    selectIsModalPetCardDetailsOpen
  );

  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');

  const {
    data: allNotice = [],
    isError: allNoticeError,
    isLoading: allNoticeLoading,
  } = tagsLinkNotAuth.includes(categoryPath)
    ? useGetAllNoticeQuery({ category: categoryPath, searchQuery })
    : {};

  const {
    data: myNotice = [],
    isError: myNoticeError,
    isLoading: myNoticeLoading,
  } = categoryPath === 'my-ads' ? useGetMyAdsQuery({ searchQuery }) : {};

  const {
    data: favoriteNotice = [],
    isError: favoriteNoticeError,
    isLoading: favoriteNoticeLoading,
  } = categoryPath === 'favorite-ads'
    ? useGetMyFavoriteQuery({ searchQuery })
    : {};

  let combinedArray;

  if (categoryPath === 'favorite-ads')
    combinedArray = favoriteNotice.notices || [];
  if (categoryPath === 'my-ads') combinedArray = myNotice.notices || [];
  if (tagsLinkNotAuth.includes(categoryPath))
    combinedArray = allNotice.notices || [];

  if (allNoticeLoading || myNoticeLoading || favoriteNoticeLoading) {
    return <div>Loading....</div>;
  }
  if (allNoticeError || myNoticeError || favoriteNoticeError) {
    return <div>Error....</div>;
  }
  if (combinedArray.length > 0) {
    return (
      <>
        <ul className={styles.list}>
          {combinedArray?.map(el => (
            <PetCard key={el._id} info={el} />
          ))}
        </ul>

        {isModalPetCardDetailsOpen && (
          <Modal closeReducer={closeModalPetCardDetails}>
            <ModalPetCardDetails />
          </Modal>
        )}
      </>
    );
  }
};

export default PetList;
