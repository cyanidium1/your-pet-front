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
  return (
    <>
      {isDropDownShow ? (
        <div className={styles.downWrap} onClick={handleClickForm}>
          <p>{text}</p>
          <form>
            {filteredNotice[filteredConstanta].map(item => (
              <CustomCheckbox data={item} key={item} />
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
            {text}
          </button>
        </>
      )}
    </>
    // <Formik
    //   initialValues={{ isChecked: false }}
    //   onSubmit={(values, actions) => {
    //     // Обробка змін checkbox тут
    //     console.log('Значення isChecked:', values.isChecked);
    //   }}
    // >
    //   {({ values, handleChange }) => (
    //     <form>
    //       <label>
    //         <Field
    //           type="checkbox"
    //           name="isChecked"
    //           checked={values.isChecked}
    //           onChange={handleChange}
    //         />
    //         Позначити цей чекбокс
    //       </label>
    //     </form>
    //   )}
    // </Formik>
    // <div className={styles.container}>
    //   <p>By age</p>
    //   <input type="checkbox" name="one" id="one" />
    //   <input type="checkbox" name="two" id="two" />
    //   <input type="checkbox" name="more" id="more" />
    // </div>
  );
};

export default DropDownList;
