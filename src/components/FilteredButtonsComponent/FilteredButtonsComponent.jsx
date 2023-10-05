import css from './FilteredButtonsComponent.module.css';
import sprite from 'images/icons.svg';
import { useDispatch } from 'react-redux';
import { deleteFilterOption } from 'redux/notices/noticeSlice';
import { filteredNotice } from 'Utils/constant';

const FilteredButtonsComponent = ({ text }) => {
  const dispatch = useDispatch();
  const selector = text === 'female' || text === 'male' ? 'sex' : 'age';
  const handleDelete = () => {
    dispatch(
      deleteFilterOption({ selector, value: filteredNotice[selector][text] })
    );
  };
  return (
    <li className={css.item}>
      <button className={css.btn} onClick={handleDelete}>
        {text}
        <svg className={`${css.icon}`}>
          <use href={sprite + '#icon-cross-small'} />
        </svg>
      </button>
    </li>
  );
};

export default FilteredButtonsComponent;
