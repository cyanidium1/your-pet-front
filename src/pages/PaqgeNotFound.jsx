import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section>
      <p>Ooops! This page not found :(</p>
      <div>here should be image!</div>
      <Link to={-1}>
        To main page
        <svg width="24px" height="24px" fill="#fff">
          <use href={`${sprite}#icon-pawprint-1`}></use>
        </svg>
      </Link>
    </section>
  );
};

export default PageNotFound;
