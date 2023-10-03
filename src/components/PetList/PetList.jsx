import { useLocation } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';
import {
  useGetAllNoticeQuery,
  useGetMyAdsQuery,
  useGetMyFavoriteQuery,
} from 'redux/notices/noticeQueryOperation';
import { tagsLinkNotAuth } from 'Utils/constant';
import NoticeNotFound from 'components/NoticeNotFound/NoticeNotFound';
import LoaderSpinner from 'components/LoaderSpiner/LoaderSpinner';

const PetList = ({ searchQuery }) => {
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
    return <LoaderSpinner />;
  }
  if (allNoticeError || myNoticeError || favoriteNoticeError) {
    return <NoticeNotFound />;
  }
  if (combinedArray.length > 0) {
    return (
      <>
        <ul className={styles.list}>
          {combinedArray?.map(el => (
            <PetCard key={el._id} info={el} />
          ))}
        </ul>
      </>
    );
  }
};

export default PetList;
