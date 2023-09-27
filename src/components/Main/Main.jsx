import React from 'react';
import s from './Main.module.css';
import bgi1x from '../../images/background/desctop/bg-desctop-1x.webp';
import bgi2x from '../../images/background/desctop/bg-desctop-2x.webp';
import petImg from '../../images/main/Frame 16722.webp';

const isRetina = window.devicePixelRatio >= 2;

const Main = () => {
  const backgroundImage = isRetina ? bgi2x : bgi1x;

  return (
    <div className={s.wrap}>
      <img className={s.img} src={backgroundImage} alt="Background" />
      <img className={s.petImg} src={petImg} alt="Pet" />
      <h3 className={s.content}>Take good care of your small pets</h3>
    </div>
  );
};

export default Main;
