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

  return (
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <div id="photo">
          <button onClick={edit}>
            <svg className={scss.personalPhotoEdit}>
              <use
                href={`${defualtPhoto}#icon-${
                  !editMode ? 'edit' : 'cross-small'
                }`}
              ></use>
            </svg>
          </button>
        </div>
        <PersonalForm mode={editMode} handleEdit={edit} />
        {!editMode && (
          <div className={scss.logoutblock}>
            <button onClick={handleLogOut}>
              <svg className={scss.logout}>
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
