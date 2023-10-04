import styles from './FilteredButton.module.css';
import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import DropDownList from 'UI/DropDownList/DropDownList';
import { useEffect, useState } from 'react';

const FilteredButton = () => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const [isFilterModalOpen, setFilterModal] = useState(false);

  const handleEscapeKey = e => {
    if (e.key === 'Escape') {
      setFilterModal(false);
    }
  };

  useEffect(() => {
    if (isFilterModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isFilterModalOpen]);

  return (
    <div className="filter_modal">
      {isFilterModalOpen ? (
        <>
          <div
            onClick={() => {
              setFilterModal(false);
            }}
            className={styles.backdrop}
          ></div>
          <div className={styles.dropDownMenu}>
            <p>Filters</p>

            <DropDownList text={'age'} />
            <DropDownList text={'gender'} />
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            setFilterModal(true);
          }}
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
