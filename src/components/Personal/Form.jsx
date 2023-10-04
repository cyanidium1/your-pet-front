import { Formik, Field, Form } from 'formik';
import scss from './personal.module.scss';
import defualtPhoto from '../../images/icons.svg';
import * as Yup from 'yup';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { userEdit } from 'redux/auth/authOperations';
import { refreshUser } from 'redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import * as reg from 'modules/helpers/regexp';
import clsx from 'clsx';

const CssTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '20px',
    borderColor: '#54adff',
  },
  '& .MuiInputBase-input': {
    padding: '4px 12px',
    fontSize: 16,
  },
  '& .MuiInputLabel-root': {
    top: '-15px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    top: '0px',
  },
}));

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required('Please upload a photo'),
  firstName: Yup.string()
    .min(2, 'Requered min one letter')
    .required('Requered'),
  email: Yup.string()
    .required('Requered')
    .matches(reg.emailRegexp, 'Not valid'),
  birthday: Yup.string()
    .required('Requered')
    .matches(reg.birthdayRegexp, 'Not valid'),
  phone: Yup.string().optional().matches(reg.PhoneReg, 'Not valid'),
  city: Yup.string().optional().matches(reg.cityRegexp, 'Not valid'),
});

export const PersonalForm = ({ mode, handleEdit }) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate an API call to update the user's data
      await dispatch(userEdit(values));
      // await dispatch(refreshUser());
      handleEdit();
    } catch (error) {
      // Handle error here
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      // enctype="multipart/form-data"
      // method="patch"
      initialValues={{
        photo: user?.user.avatarURL || '123',
        firstName: user?.user.name || '',
        email: user?.user.email || '',
        birthday: user?.user.birthday || '',
        phone: user?.user.phone || '',
        city: user?.user.city || '',
        confirm: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        setFieldValue,
        formikProps,
        handleReset,
        setFieldTouched,
      }) => (
        <Form className={scss.form}>
          <div id="photo">
            <button
              type="reset"
              onClick={() => {
                handleEdit();
              }}
            >
              <svg className={scss.personalPhotoEdit}>
                <use
                  href={`${defualtPhoto}#icon-${
                    !mode ? 'edit' : 'cross-small'
                  }`}
                ></use>
              </svg>
            </button>
          </div>
          <div
          // className={clsx(
          //   typeof values.photo === 'string' ? scss.costil : ''
          // )}
          >
            <label
              className={
                (scss.editPhotoBlock, clsx(values.confirm ? scss.costil : ''))
              }
            >
              <div>
                <img
                  src={
                    typeof values.photo === 'object'
                      ? URL.createObjectURL(values.photo)
                      : values.photo
                  }
                  alt="Selected img"
                  className={scss.editPhotoBlock}
                />
              </div>
              <input
                onChange={e => {
                  setFieldValue('photo', e.target.files[0]);
                }}
                className={scss.fileField}
                type="file"
                name="photo"
                disabled={!mode}
              />
              <div className={scss.confirmPhoto}>
                {mode &&
                  (typeof values.photo === 'string' ? (
                    <div className={scss.editPhotoLabel}>
                      <svg className={scss.editPhoto}>
                        <use href={`${defualtPhoto}#icon-camera`}></use>
                      </svg>
                      <span>Edit photo</span>
                    </div>
                  ) : (
                    ''
                  ))}
              </div>
            </label>
          </div>
          {mode && typeof values.photo !== 'string' && !values.confirm && (
            <div className={`${scss.editPhotoLabel} ${scss.confirmPhoto2}`}>
              <button
                type="button"
                onClick={() => setFieldValue('confirm', true)}
              >
                <svg className={scss.editPhoto}>
                  <use href={`${defualtPhoto}#icon-check`}></use>
                </svg>
              </button>

              <span>Confirm</span>
              <button
                id="cansel"
                type="button"
                onClick={() => {
                  // setFieldValue('confirm', false);
                  // setFieldTouched('photo', false);
                  setFieldValue('photo', user.user.avatarURL);
                }}
              >
                <svg className={scss.editPhoto}>
                  <use href={`${defualtPhoto}#icon-cross-small`}></use>
                </svg>
              </button>
            </div>
          )}
          <div className={scss.userFields}>
            <label htmlFor="firstName" className={scss.label}>
              Name:
              <Field name="firstName" type="email">
                {({ meta, isValid, validate }) => (
                  <>
                    <CssTextField
                      disabled={!mode}
                      error={meta.error ? true : false}
                      required
                      className={scss.input}
                      label={meta.error}
                      value={values.firstName}
                      onChange={e => {
                        setFieldValue('firstName', e.target.value);
                      }}
                    />
                  </>
                )}
              </Field>
            </label>
            <label htmlFor="email" className={scss.label}>
              Email:
              <Field name="email">
                {({ meta, isValid }) => (
                  <CssTextField
                    error={meta.error ? true : false}
                    disabled={!mode}
                    required
                    className={scss.input}
                    label={meta.error}
                    value={values.email}
                    onChange={e => {
                      setFieldValue('email', e.target.value);
                    }}
                  />
                )}
              </Field>
            </label>
            <label htmlFor="birthday" className={scss.label}>
              Birthday:
              <Field name="birthday">
                {({ meta, isValid }) => (
                  <CssTextField
                    error={meta.error ? true : false}
                    disabled={!mode}
                    required
                    className={scss.input}
                    label={meta.error}
                    value={values.birthday}
                    sx={{
                      '& .MuiInputLabel-root': {
                        top: '-13px',
                      },
                    }}
                    onChange={e => {
                      setFieldValue('birthday', e.target.value);
                    }}
                  />
                )}
              </Field>
            </label>
            <label htmlFor="phone" className={scss.label}>
              Phone:
              <Field name="phone">
                {({ meta, isValid }) => (
                  <CssTextField
                    error={meta.error ? true : false}
                    disabled={!mode}
                    className={scss.input}
                    label={meta.error}
                    value={values.phone}
                    sx={{
                      '& .MuiInputLabel-root': {
                        top: '0px',
                      },
                    }}
                    onChange={e => {
                      setFieldValue('phone', e.target.value);
                    }}
                  />
                )}
              </Field>
            </label>
            <label htmlFor="city" className={scss.label}>
              City:
              <Field name="city">
                {({ meta, isValid }) => (
                  <CssTextField
                    error={meta.error ? true : false}
                    disabled={!mode}
                    className={scss.input}
                    label={meta.error}
                    value={values.city}
                    sx={{
                      '& .MuiInputLabel-root': {
                        top: '0px',
                      },
                    }}
                    onChange={e => {
                      setFieldValue('city', e.target.value);
                    }}
                  />
                )}
              </Field>
            </label>
          </div>

          {mode && (
            <button className={`${scss.button}`} type="submit">
              Save
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};
