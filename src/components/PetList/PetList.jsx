import React, { useEffect, useState } from 'react';
import { selectAllNotices } from 'redux/notices/noticeSelectors';
import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';
import { useSelector } from 'react-redux';

const PetList = () => {
  const { notices } = useSelector(selectAllNotices);

  return (
    <>
      <ul className={styles.list}>
        {notices && notices?.map(el => <PetCard key={el._id} info={el} />)}
      </ul>
    </>
  );
};

export default PetList;
