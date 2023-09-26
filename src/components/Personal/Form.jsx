import { Formik, Field, Form } from 'formik';
import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';

export const PersonalForm = ({ mode, photo }) => {
  return (
    <Formik
      enctype="multipart/form-data"
      method="putch"
      initialValues={{
        firstName: '',
        email: '',
        birthday: '',
        toggledEditPhoto: '',
        phone: '',
        city: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form className={scss.form}>
          {mode && (
            <label className={scss.editPhotoBlock}>
              <Field
                onChange={e => photo(e.target.files[0])}
                accept="image/*,image/jpeg"
                className={scss.fileField}
                type="file"
                name="toggledEditPhoto"
              ></Field>
              <svg className={scss.editPhoto}>
                <use href={`${defualtPhoto}#icon-camera`}></use>
              </svg>
              Edit photo
            </label>
          )}

          <label htmlFor="firstName" className={scss.label}>
            Name:
            <Field
              className={scss.input}
              id="firstName"
              name="firstName"
              placeholder="Anna"
              disabled={!mode}
            />
          </label>
          {/* <label htmlFor="firstName" className={scss.label}>
            Name:
            <Field
              className={scss.input}
              id="firstName"
              name="firstName"
              placeholder="Anna"
              type="file"
            />
          </label> */}

          <label htmlFor="email" className={scss.label}>
            Email:
            <Field
              id="email"
              name="email"
              placeholder="anna@gmail.com"
              type="email"
              className={scss.input}
              disabled={!mode}
            />
          </label>

          <label htmlFor="birthday" className={scss.label}>
            Birthday:
            <Field
              id="birthday"
              name="birthday"
              placeholder=""
              type="date"
              className={scss.input}
              disabled={!mode}
            />
          </label>

          <label htmlFor="phone" className={scss.label}>
            Phone:
            <Field
              id="phone"
              name="phone"
              placeholder="+38000000000"
              type="number"
              className={scss.input}
              disabled={!mode}
            />
          </label>

          <label htmlFor="city" className={scss.label}>
            City:
            <Field
              id="city"
              name="city"
              placeholder="Kiev"
              className={scss.input}
              disabled={!mode}
            />
          </label>
          {mode && (
            <button className={scss.button} type="submit">
              Save
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};
