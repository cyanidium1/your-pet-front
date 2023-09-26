import React from 'react';
import { useLocation } from 'react-router-dom';
import notices from '../../database/notices.json';
import PetCard from '../PetCard/PetCard';
import styles from './PetList.module.css';

const PetList = () => {
  const params = useLocation();
  const urlLocation = params.pathname.split('/').slice(-1).join('');

  return (
    // {urlLocation === 'sell' && <LoginPage />}
    <ul className={styles.list}>
      {notices.map(el => (
        <PetCard key={el.id} info={el} />
      ))}
    </ul>
  );
};

export default PetList;
