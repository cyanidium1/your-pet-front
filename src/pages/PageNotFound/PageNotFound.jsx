import React from 'react';
import { Link } from 'react-router-dom';
import css from './PageNotFound.module.scss';
import sprite from '../../images/icons.svg';
import NoticeNotFound from 'components/NoticeNotFound/NoticeNotFound';

const PageNotFound = () => {
  return (
    <section className={css.section}>
      <div className={css.notFoundWrapper}>
        <p className={css.notFoundText}>Ooops! This page not found :(</p>
        <div className={css.imgWrapper}></div>
        <NoticeNotFound />
      </div>
    </section>
  );
};

export default PageNotFound;
