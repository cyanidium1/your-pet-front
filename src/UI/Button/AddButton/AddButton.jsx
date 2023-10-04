import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import styles from './AddButton.module.css';
import { Link, useLocation } from 'react-router-dom';

const AddButton = ({ clickFunc }) => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  const location = useLocation();
  return (
    <>
      {isMobile ? (
        <Link
          // onClick={clickFunc}
          to="/add-pet"
          className={styles.addBtn}
          state={{ from: location }}
        >
          <svg className={styles.icon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Add pet
        </Link>
      ) : (
        <Link
          to="/add-pet"
          // onClick={clickFunc}
          className={styles.addBtnBig}
          state={{ from: location }}
        >
          Add pet
          <svg className={styles.icon}>
            <use href={sprite + '#icon-plus-small'} />
          </svg>
        </Link>
      )}
    </>
  );
};

export default AddButton;
