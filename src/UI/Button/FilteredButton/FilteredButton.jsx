import styles from './FilteredButton.module.css';
import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import { useEffect, useState } from 'react';
import DropDownList from 'UI/DropDownList/DropDownList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFilterModalOpen } from 'redux/global/globalSelectors';
import { filterModal, closeFilterModal } from 'redux/global/globalSlice';

const FilteredButton = () => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const isFilterModalOpen = useSelector(selectIsFilterModalOpen);
  const dispatch = useDispatch();

  const handleClick = e => {
    if (
      e.currentTarget === e.target ||
      e.target.nodeName === 'P' ||
      e.target.nodeName === 'svg' ||
      e.target.nodeName === 'use'
    ) {
      dispatch(filterModal());
    }
  };

  useEffect(() => {
    const onCloseModalESC = e => {
      if (e.code === 'Escape') {
        dispatch(closeFilterModal());
      }
    };

    window.addEventListener('keydown', onCloseModalESC);
    return () => {
      window.removeEventListener('keydown', onCloseModalESC);
    };
  }, [dispatch]);
  return (
    <div className="filter_modal">
      {isFilterModalOpen ? (
        <div className={styles.dropDownMenu} onClick={handleClick}>
          <p>Filters</p>

          <DropDownList text={'By age'} />
          <DropDownList text={'By gender'} />
        </div>
      ) : (
        <button
          onClick={handleClick}
          id="open_filter"
          className={styles.filtersButton}
        >
          {!isMobile && 'Filter'}
          <svg className={styles.icon}>
            <use href={sprite + '#icon-filters-3'} />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FilteredButton;
