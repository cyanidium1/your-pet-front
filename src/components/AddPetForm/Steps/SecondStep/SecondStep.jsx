import React from 'react';
import css from './SecondStep.module.css';
import sprite from '../../../../images/icons.svg';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextStep,
  prevStep,
} from '../../../../redux/adddPetForm/addPetFormSlice';
import {
  selectMyPetBirthDate,
  selectMyPetType,
  selectMyPetName,
  selectMyPetTitle,
} from '../../../../redux/myPets/addPetSelectors';
import { updatePetInfo } from '../../../../redux/myPets/addPetOperations';
import { addPetPersonalInfo } from 'redux/myPets/addPetSlice';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title of add is required')
    .min(6, 'Title must be at least 6 characters')
    .max(64, 'Title must be at most 64 characters'),
  name: Yup.string().required('Name pet is required'),
  birthDate: Yup.date()
    .default(() => new Date())
    .required('Birth date is required'),
  type: Yup.string().required('Type is required'),
});

const SecondStepSell = () => {
  const dispatch = useDispatch();
  const title = useSelector(selectMyPetTitle);
  const name = useSelector(selectMyPetName);
  const birthDate = useSelector(selectMyPetBirthDate);
  const type = useSelector(selectMyPetType);



  const formattedDate = dateFromBackend => {
    const date = new Date(dateFromBackend);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}-${month
      .toString()
      .padStart(2, '0')}-${year}`;
    return formattedDate;
  };

  const handleNext = values => {
    const pet = {
      ...values,
      date: formattedDate(values.birthDate),
    };
    dispatch(addPetPersonalInfo(pet));
    dispatch(nextStep());
    console.log(formattedDate(values.birthDate));
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          title,
          name,
          birthDate,
          type,
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleNext(values);
        }}
      >
        <Form>
          <div className={css.FormWrapper}>
            <div className={css.WrapperLabelInput}>
              <label className={css.LabelStep} htmlFor="title">
                Title of add
              </label>
              <Field
                className={css.Input}
                type="text"
                id="title"
                name="title"
                placeholder="Type add title"
              />
              <ErrorMessage
                name="title"
                component="p"
                className={css.ErrorTextLow}
              />
            </div>
            <div className={css.WrapperLabelInput}>
              <label className={css.LabelStep} htmlFor="name">
                Name pet
              </label>
              <Field
                className={css.Input}
                type="text"
                id="name"
                name="name"
                placeholder="Type pet name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className={css.ErrorTextLow}
              />
            </div>
            <div className={css.WrapperLabelInput}>
              <label className={css.LabelStep} htmlFor="birthDate">
                Date of birth
              </label>
              <Field
                type="date"
                id="Date"
                name="birthDate"
                className={css.Input}
              />
              <ErrorMessage
                name="birthDate"
                component="p"
                className={css.ErrorText}
              />
            </div>
            <div className={css.WrapperLabelInput}>
              <label className={css.LabelStep} htmlFor="type">
                Type
              </label>
              <Field
                className={css.Input}
                type="text"
                id="type"
                name="type"
                placeholder="Type of pet"
              />
              <ErrorMessage
                name="type"
                component="p"
                className={css.ErrorTextLow}
              />
            </div>
            <ul className={css.LinkAddPEt}>
              <li>
                <button
                  className={css.LinkAddPEtLitkCancel}
                  onClick={() => handleBack()}
                >
                  <div className={css.ButtonEl}>
                    <svg width="24px" height="24px">
                      <use href={`${sprite}#icon-arrow-left`}></use>
                    </svg>
                    <span>Back</span>
                  </div>
                </button>
              </li>
              <li>
                <button className={css.ButtonNext} type="submit">
                  <div className={css.ButtonEl}>
                    <span>Next</span>
                    <svg width="24px" height="24px" fill="#fff">
                      <use href={`${sprite}#icon-pawprint-1`}></use>
                    </svg>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SecondStepSell;
