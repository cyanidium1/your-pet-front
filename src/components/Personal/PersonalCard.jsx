import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
export const Card = () => {
  const [editMode, SetEditMode] = useState(false);
  const edit = () => SetEditMode(!editMode);

  return (
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <div>
          <svg className={scss.personalPhoto}>
            <use href={`${defualtPhoto}#icon-Photo-default`}></use>
          </svg>
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
        <PersonalForm mode={editMode} />
        {!editMode && (
          <div className={scss.logoutblock}>
            <svg className={scss.logout}>
              <use href={`${defualtPhoto}#icon-logout`}></use>
            </svg>
            <span>Log Out</span>
          </div>
        )}
      </div>
    </div>
  );
};
