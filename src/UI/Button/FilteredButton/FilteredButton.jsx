import styles from './FilteredButton.module.css';
import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';

const FilteredButton = () => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  return (
    <button className={styles.filtersButton}>
      {!isMobile && 'Filter'}
      <svg className={styles.icon}>
        <use href={sprite + '#icon-filters-3'} />
      </svg>
    </button>
  );
};

export default FilteredButton;
