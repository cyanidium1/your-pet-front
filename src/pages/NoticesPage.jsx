import React, { useEffect } from 'react';
import Search from '../components/Search/Search';
import TagsArray from '../components/TagsArray/TagsArray';
import PetList from '../components/PetList/PetList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNoticesThunk } from 'redux/notices/noticeOperations';
import { selectIsNoticesLoading } from 'redux/notices/noticeSelectors';
import { useLocation } from 'react-router-dom';
import { tagsLinkAuth, tagsLinkNotAuth } from 'Utils/constant';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isNoticesLoading = useSelector(selectIsNoticesLoading);
  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');

  useEffect(() => {
    if (tagsLinkNotAuth.includes(categoryPath)) {
      dispatch(getAllNoticesThunk(categoryPath));
    }
    if (tagsLinkAuth.includes(categoryPath)) {
      if (categoryPath === tagsLinkAuth[0]) {
        console.log(categoryPath);
      }
      if (categoryPath === tagsLinkAuth[1]) {
        console.log(categoryPath);
      }
    }
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
