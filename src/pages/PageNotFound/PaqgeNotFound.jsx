import React from 'react';
import { Link } from 'react-router-dom';
import css from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <section className={css.section}>
      <div className={css.notFoundWrapper}>
        <p className={css.notFoundText}>Ooops! This page not found :(</p>
        <div>here should be image!</div>
        <Link to={-1} className={css.backBtn}>
          To main page
          <svg width="24px" height="24px" fill="#fff">
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
