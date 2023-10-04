import React from 'react';
import s from './Main.module.css';
import desk from 'images/background/desk_1x.webp';
import mob from 'images/background/mob_1x.webp';
import tabl from 'images/background/tab_1x.webp';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';

const Main = () => {
  const isTabl = useMedia(screen.breakpoints.tablet.media);
  const isDesk = useMedia(screen.breakpoints.desktop.media);
  const isMob = useMedia(screen.breakpoints.mobile.media);
  return (
    <div className={s.wrap}>
      <h3 className={s.content}>Take good care of your small pets</h3>
      {isMob && <img className={s.petImg} src={mob} alt="Pet" />}
      {isTabl && <img className={s.petImg} src={tabl} alt="Pet" />}
      {isDesk && <img className={s.petImg} src={desk} alt="Pet" />}
    </div>
  );
};

export default Main;
