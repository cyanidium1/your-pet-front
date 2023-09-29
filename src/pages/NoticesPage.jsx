import React, { useEffect } from 'react';
import Search from '../components/Search/Search';
import TagsArray from '../components/TagsArray/TagsArray';
import PetList from '../components/PetList/PetList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNoticesThunk } from 'redux/notices/noticeOperations';
import { selectIsNoticesLoading } from 'redux/notices/noticeSelectors';
import { useLocation } from 'react-router-dom';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isNoticesLoading = useSelector(selectIsNoticesLoading);
  const path = useLocation();
  const categoryPath = path.pathname.split('/').slice(-1).join('');

  useEffect(() => {
    dispatch(getAllNoticesThunk(categoryPath));
  }, [categoryPath]);
  return (
    <>
      <Search />
      <TagsArray />
      {!isNoticesLoading && <PetList />}
    </>
  );
};

export default NoticesPage;
