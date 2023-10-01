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

const NoticesPage = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? null;

  const isNoticesLoading = useSelector(selectIsNoticesLoading);

  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');

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
  return (
    <>
      <h3 className={styles.name}></h3>
      <Search searchParams={searchParams} setSearchParams={setSearchParams} titleSearch={'Find your favorite pets'} />
      <TagsArray />
      {!isNoticesLoading && <PetList />}
    </>
  );
};

export default NoticesPage;
