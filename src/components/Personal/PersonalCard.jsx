import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import { PersonalForm } from './Form';
import { Formik, Field, Form } from 'formik';
export const Card = () => {
  return (
    <div>
      <h2>My information:</h2>
      <div className={scss.card}>
        <div>
          <svg className={scss.personalPhoto}>
            <use href={`${defualtPhoto}#icon-Photo-default`}></use>
          </svg>
          <button>
            <svg className={scss.personalPhotoEdit}>
              <use href={`${defualtPhoto}#icon-edit`}></use>
            </svg>
          </button>
        </div>

        <PersonalForm />
      </div>
    </div>
  );
};
