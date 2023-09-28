import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import styles from './AddButton.module.css';
import { Link } from 'react-router-dom';

const AddButton = () => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  return (
    <>
      {isMobile ? (
        <Link to={'/add-pet'} className={styles.addBtn}>
          <svg className={styles.icon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Add pet
        </Link>
      ) : (
        <Link to={'/add-pet'} className={styles.addBtnBig}>
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
