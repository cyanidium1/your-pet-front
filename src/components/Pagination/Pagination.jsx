import css from './Pagination.module.css';
import sprite from '../../images/icons.svg';
import { useState } from 'react';

const Pagination = ({ totalNewsPages, setSearchParams }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = number => {
    setSearchParams({ page: number });
    setActivePage(number);
  };

  const handleNextPage = () => {
    if (activePage < totalNewsPages) {
      const newPage = activePage + 1;
      setSearchParams({ page: newPage });
      setActivePage(newPage);
    }
  };
  const handlePrevPage = () => {
    if (activePage > 1) {
      const newPage = activePage - 1;
      setSearchParams({ page: newPage });
      setActivePage(newPage);
    }
  };

  const pageNumber = [];
  for (let i = 1; i <= totalNewsPages; i++) pageNumber.push(i);
  return (
    <div className={css.paginationWrap}>
      <button
        className={css.btnLeft}
        onClick={handlePrevPage}
        disabled={activePage === 1}
      >
        <svg width={35} height={35}>
          <use href={sprite + '#icon-left'} />
        </svg>
      </button>

      <ul className={css.pagination}>
        {pageNumber.map((number, index) => (
          <li
            key={index + 1}
            className={`${css.paginationItem} ${
              number === activePage ? css.activePage : ''
            }`}
            onClick={e => {
              e.preventDefault();
              handlePageClick(number);
            }}
          >
            <a href="!#"> {number} </a>
          </li>
        ))}
      </ul>

      <button
        className={css.btnRight}
        onClick={handleNextPage}
        disabled={activePage === totalNewsPages}
      >
        <svg width={35} height={35}>
          <use href={sprite + '#icon-right'} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
