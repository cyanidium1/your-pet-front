import styles from './FilteredButton.module.css';
import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import { useState } from 'react';
import DropDownList from 'UI/DropDownList/DropDownList';

const FilteredButton = () => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleClick = e => {
    if (e.currentTarget === e.target || e.target.nodeName === 'P') {
      setShowFilterMenu(toggle => !toggle);
    }
  };
  return (
    <>
      {showFilterMenu ? (
        <div className={styles.dropDownMenu} onClick={handleClick}>
          <p>Filters</p>

          <DropDownList text={'By age'} />
          <DropDownList text={'By gender'} />
        </div>
      ) : (
        <button onClick={handleClick} className={styles.filtersButton}>
          {!isMobile && 'Filter'}
          <svg className={styles.icon}>
            <use href={sprite + '#icon-filters-3'} />
          </svg>
        </button>
      )}
    </>
  );
};

export default FilteredButton;
