import React from 'react';
import { useLocation } from 'react-router-dom';
import notices from '../../database/notices.json';
import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';

const PetList = () => {
  const params = useLocation();
  const urlLocation = params.pathname.split('/').slice(-1).join('');

  const nameForFilter = urlLocation.split('-').join(' ');

  const filteredNotices = notices.filter(
    adv => adv.type.toLowerCase() === nameForFilter.toLowerCase()
  );
  return (
    <ul className={styles.list}>
      {filteredNotices.map(el => (
        <PetCard key={el.id} info={el} />
      ))}
    </ul>
  );
};

export default PetList;
