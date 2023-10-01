import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAllNotices } from 'redux/notices/noticeSelectors';

import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';

const PetList = () => {
  const { notices } = useSelector(selectAllNotices);

  return (
    <ul className={styles.list}>
      {notices && notices?.map(el => <PetCard key={el._id} info={el} />)}
    </ul>
  );
};

export default PetList;
