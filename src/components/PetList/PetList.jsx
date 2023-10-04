import { useLocation, useSearchParams } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';
import {
  useGetAllNoticeQuery,
  useGetMyAdsQuery,
  useGetMyFavoriteQuery,
  useGetNoticeByIdQuery,
} from 'redux/notices/noticeQueryOperation';
import { tagsLinkNotAuth } from 'Utils/constant';
import NoticeNotFound from 'components/NoticeNotFound/NoticeNotFound';
import LoaderSpinner from 'components/LoaderSpiner/LoaderSpinner';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Pagination from 'components/Pagination/Pagination';

  const PetList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? undefined;
  const numberOfPage = searchParams.get('page') ?? null;
  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');

  const {
    data: allNotice = [],
    isError: allNoticeError,
    isLoading: allNoticeLoading,
  } = tagsLinkNotAuth.includes(categoryPath)
    ? useGetAllNoticeQuery({
      category: categoryPath,
      searchQuery: productName,
      page: numberOfPage      
      })
    : {};

  const {
    data: myNotice = [],
    isError: myNoticeError,
    isLoading: myNoticeLoading,
  } = categoryPath === 'my-ads' ? useGetMyAdsQuery({ searchQuery: productName, page: numberOfPage  }) : {};

  const {
    data: favoriteNotice = [],
    isError: favoriteNoticeError,
    isLoading: favoriteNoticeLoading,
  } = categoryPath === 'favorite-ads'
    ? useGetMyFavoriteQuery({ searchQuery: productName, page: numberOfPage  })
    : {};

  let combinedArray;

  if (categoryPath === 'favorite-ads')
    combinedArray = favoriteNotice || [];
  if (categoryPath === 'my-ads') combinedArray = myNotice|| [];
  if (tagsLinkNotAuth.includes(categoryPath))
    combinedArray = allNotice || [];

  if (allNoticeLoading || myNoticeLoading || favoriteNoticeLoading) {
    return <LoaderSpinner />;
  }
  if (allNoticeError || myNoticeError || favoriteNoticeError) {
    return <NoticeNotFound />;
  }

  console.log(combinedArray.notices);
  if (combinedArray.notices?.length > 0) {
    return (
      <>
        <ul className={styles.list}>
          {combinedArray.notices?.map(el => (
            <PetCard key={el._id} info={el} />
          ))}
        </ul>
        <Pagination totalNewsPages={combinedArray.totalPages} setSearchParams={setSearchParams}/>
      </>
    );
  }
};

export default PetList;
