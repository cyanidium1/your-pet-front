import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { resetAuthState } from 'redux/auth/authSlice';
export const Card = () => {
  const [editMode, SetEditMode] = useState(false);
  const [photo, SetPhoto] = useState({ photo: { result: '' } });
  const edit = () => SetEditMode(!editMode);

  const handlePhotoEdit = photo => {
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    console.log(reader.photo.result);
    return SetPhoto({ photo: reader });
  };

  return (
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <div id="photo">
          <img src={photo.photo.result}></img>
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
        <PersonalForm mode={editMode} photo={handlePhotoEdit} />
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
