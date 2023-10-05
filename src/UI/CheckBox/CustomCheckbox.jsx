import React, { useState } from 'react';
import styles from './CustomCheckBox.module.css';
import sprite from '../../images/icons.svg';
import { filteredNotice } from 'Utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterOptions } from 'redux/notices/noticeSelectors';
import {
  addOptionToFilter,
  deleteFilterOption,
} from 'redux/notices/noticeSlice';

const CustomCheckbox = ({ data, selector }) => {
  const filterOption = useSelector(selectFilterOptions);

  const [isChecked, setIsChecked] = useState(
    filterOption[selector].includes(filteredNotice[selector][data])
  );
  const customId = data.toLowerCase().split(' ').join('');

  const dispatch = useDispatch();

  const handleChange = e => {
    setIsChecked(check => !check);

    if (!filterOption[selector].includes(e.target.value)) {
      dispatch(
        addOptionToFilter({ selector, info: filteredNotice[selector][data] })
      );
    } else {
      dispatch(deleteFilterOption({ selector, value: e.target.value }));
    }
  };
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={customId}
        name="gender"
        checked={isChecked}
        onChange={handleChange}
        value={filteredNotice[selector][data]}
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
