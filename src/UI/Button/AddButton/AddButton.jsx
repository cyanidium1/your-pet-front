import sprite from '../../../images/icons.svg';
import { useMedia } from 'react-use';
import { screen } from 'Utils/screen';
import styles from './AddButton.module.css';

const AddButton = ({ clickFunc }) => {
  const isMobile = useMedia(screen.breakpoints.mobile.media);
  return (
    <>
      {isMobile ? (
        <button onClick={clickFunc} className={styles.addBtn}>
          <svg className={styles.icon}>
            <use href={sprite + '#icon-plus'} />
          </svg>
          Add pet
        </button>
      ) : (
        <button onClick={clickFunc} className={styles.addBtnBig}>
          Add pet
          <svg className={styles.icon}>
            <use href={sprite + '#icon-plus-small'} />
          </svg>
        </button>
      )}
    </>
  );
};

export default AddButton;
