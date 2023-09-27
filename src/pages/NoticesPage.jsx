import React, { useEffect } from 'react';
import Search from '../components/Search/Search';
import TagsArray from '../components/TagsArray/TagsArray';
import PetList from '../components/PetList/PetList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNoticesThunk } from 'redux/notices/noticeOperations';
import { selectIsNoticesLoading } from 'redux/notices/noticeSelectors';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isNoticesLoading = useSelector(selectIsNoticesLoading);
  // console.log(isNoticesLoading);
  useEffect(() => {
    dispatch(getAllNoticesThunk('sell'));
  }, []);
  return (
    <div className="container">
      <Search />
      <TagsArray />
      {!isNoticesLoading && <PetList />}
    </div>
  );
};

export default NoticesPage;
