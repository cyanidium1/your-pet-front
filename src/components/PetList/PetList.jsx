import { useLocation, useSearchParams } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';
import {
  useGetAllNoticeQuery,
  useGetMyAdsQuery,
  useGetMyFavoriteQuery,
  useGetNoticeByIdQuery,
} from 'redux/notices/noticeQueryOperation';
import { listForFilter, tagsLinkNotAuth } from 'Utils/constant';
import NoticeNotFound from 'components/NoticeNotFound/NoticeNotFound';
import LoaderSpinner from 'components/LoaderSpiner/LoaderSpinner';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Pagination from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilterOptions } from 'redux/notices/noticeSelectors';

const PetList = () => {
  const filterOption = useSelector(selectFilterOptions);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? undefined;
  const numberOfPage = searchParams.get('page') ?? undefined;
  const sex = searchParams.get('gender') ?? undefined;
  const age = searchParams.get('age') ?? undefined;

  const location = useLocation();
  const arrDone = location.search.slice(1).split('&');
  const isSexDouble =
    arrDone.map(str => str.indexOf('sex')).filter(val => val === 0).length ===
    2;
  const queryFilterParams = isSexDouble
    ? `?${arrDone.filter(str => str.indexOf('sex')).join('&')}`
    : location.search;

  useEffect(() => {
    setSearchParams(filterOption);
  }, [filterOption]);
  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');

  const {
    data: allNotice = [],
    isError: allNoticeError,
    isLoading: allNoticeLoading,
  } = tagsLinkNotAuth.includes(categoryPath)
    ? useGetAllNoticeQuery({
        category: categoryPath,
        params: queryFilterParams,
      })
    : {};

  const {
    data: myNotice = [],
    isError: myNoticeError,
    isLoading: myNoticeLoading,
  } = categoryPath === 'my-ads'
    ? useGetMyAdsQuery({
        params: queryFilterParams,
      })
    : {};

  const {
    data: favoriteNotice = [],
    isError: favoriteNoticeError,
    isLoading: favoriteNoticeLoading,
  } = categoryPath === 'favorite-ads'
    ? useGetMyFavoriteQuery({
        params: queryFilterParams,
      })
    : {};

  let combinedArray;

  if (categoryPath === 'favorite-ads') combinedArray = favoriteNotice || [];
  if (categoryPath === 'my-ads') combinedArray = myNotice || [];
  if (tagsLinkNotAuth.includes(categoryPath)) combinedArray = allNotice || [];

  if (allNoticeLoading || myNoticeLoading || favoriteNoticeLoading) {
    return <LoaderSpinner />;
  }
  if (allNoticeError || myNoticeError || favoriteNoticeError) {
    return <NoticeNotFound />;
  }

  if (combinedArray.notices?.length > 0) {
    return (
      <>
        <ul className={styles.list}>
          {combinedArray.notices?.map(el => (
            <PetCard key={el._id} info={el} />
          ))}
        </ul>
        <Pagination
          totalNewsPages={combinedArray.totalPages}
          setSearchParams={setSearchParams}
        />
      </>
    );
  }
};

export default PetList;
