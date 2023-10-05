import styles from './DropDownList.module.css';
import sprite from '../../images/icons.svg';
import { Formik, Field } from 'formik';
import { useState } from 'react';
import { filteredNotice } from '../../Utils/constant';
import CustomCheckbox from 'UI/CheckBox/CustomCheckbox';

const DropDownList = ({ text }) => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const filteredConstanta = text.toLowerCase().split(' ').join('');

  const handleClickForm = e => {
    if (e.currentTarget === e.target || e.target.nodeName === 'P') {
      setIsDropDownShow(toggle => !toggle);
    }
  };
  const itemDataList = Object.keys(filteredNotice[filteredConstanta]);
  const editableText = text === 'sex' ? 'gender' : 'age';
  return (
    <>
      {isDropDownShow ? (
        <div className={styles.downWrap} onClick={handleClickForm}>
          <p>{'By ' + editableText}</p>
          <form>
            {itemDataList.map(item => (
              <CustomCheckbox
                data={item}
                key={item}
                selector={filteredConstanta}
              />
            ))}
          </form>
        </div>
      ) : (
        <>
          <button
            onClick={() => setIsDropDownShow(toggle => !toggle)}
            className={styles.secondaryFilterBtn}
          >
            <svg className={styles.icon}>
              <use href={sprite + '#icon-chevron-down'} />
            </svg>
            {'By ' + editableText}
          </button>
        </>
      )}
    </>
  );
};

export default DropDownList;
