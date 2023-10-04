import React, { useState } from 'react';
import styles from './CustomCheckBox.module.css';
import sprite from '../../images/icons.svg';

const CustomCheckbox = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  // const customId = data.toLowerCase().split(' ').join('');

  const handleChange = () => {
    setIsChecked(check => !check);
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={customId}
        name={customId}
        checked={isChecked}
        onChange={handleChange}
      />
      {isChecked ? (
        <svg className={styles.icon}>
          <use href={sprite + '#icon-checked-round'} />
        </svg>
      ) : (
        <svg className={styles.icon}>
          <use href={sprite + '#icon-checkbox-round'} />
        </svg>
      )}
      <label htmlFor={customId}>{data}</label>
    </div>
  );
};

export default CustomCheckbox;
