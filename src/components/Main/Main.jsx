import React from 'react';
import s from './Main.module.css';
import petImg from '../../images/main/Frame 16722.webp';

const Main = () => {
  return (
    <div className={s.wrap}>
      <h3 className={s.content}>Take good care of your small pets</h3>
      <img className={s.petImg} src={petImg} alt="Pet" />
    </div>
  );
};

export default Main;
