import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { useState } from 'react';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const Card = () => {
  const [editMode, SetEditMode] = useState(false);
  const dispatch = useDispatch(logOut);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const edit = () => SetEditMode(!editMode);
  const handleCloseBTN = () => {};

  return (
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <PersonalForm mode={editMode} handleEdit={edit} />
        {!editMode && (
          <div>
            <button
              onClick={handleLogOut}
              // style={{ height: 24 }}
              className={scss.logoutblock}
            >
              <svg className={scss.logoutImg}>
                <use href={`${defualtPhoto}#icon-logout`}></use>
              </svg>
              <span>Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
