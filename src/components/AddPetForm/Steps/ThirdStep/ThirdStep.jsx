import React, { useRef, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ThirdStep.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyPet,
  selectMyPetComments,
  selectMyPetImage,
} from '../../../../redux/myPets/addPetSelectors';
import {
  addNewPet,
  addNewPetNotice,
  updatePetInfo,
} from '../../../../redux/myPets/addPetOperations';
import {
  prevStep,
  resetSteps,
} from '../../../../redux/adddPetForm/addPetFormSlice';
import { useNavigate } from 'react-router-dom';
import {
  addPetMoreInfo,
  resetState,
} from '../../../../redux/myPets/addPetSlice';
import sprite from '../../../../images/icons.svg';

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required('Please upload a photo'),

  comments: Yup.string()
    .optional()
    .max(120, 'Title must be at most 120 characters'),
});

const ThirdStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
addpet-styles-debug-and-backend-change
  const petBody = useSelector(selectMyPet);
  const file = useSelector(selectMyPetImage);
  const comments = useSelector(selectMyPetComments);

  const handleSubmit = values => {
    const { name, date, type } = petBody;

    const pet = {
      name,
      date,
      type,
      ...values,
    };
    console.log(pet);
    dispatch(addPetMoreInfo(pet));
    // const newPetBody = { ...pet };
    dispatch(addNewPet(pet));
    dispatch(resetSteps());
    dispatch(resetState());
    // navigate(-1);
  };
  const handlePreviousStep = () => {
    dispatch(prevStep());
  };

  const handleOptionChange = (option, number) => {
    setSex(option);
    setActiveButton(number);
    setIsSexIgnored(false);
  };
  return (
    <>
      <Formik
        initialValues={{ file, comments }}
        validationSchema={validationSchema}
        onSubmit={values => handleSubmit(values)}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <div className={css.wrapperPhoto}>
                <label className={css.labelAddText}>
                  Load the pet`s image:
                </label>
                <div>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={e => {
                      setFieldValue('file', e.currentTarget.files[0]);
                    }}
                    style={{ display: 'none' }}
                  />
                </div>
                <label htmlFor="file">
                  <div className={`${css.labelAdd} ${css.photoInputWrapper}`}>
                    <Field name="file">
                      {({ field }) => (
                        <>
                          {field.value && (
                            <img
                              className={css.previewPhoto}
                              src={URL.createObjectURL(field.value)}
                              alt="Selected img"
                            />
                          )}
                          <svg
                            width="30px"
                            height="30px"
                            stroke="#54adff"
                            className={css.iconAdd}
                          >
                            <use href={`${sprite}#icon-plus`}></use>
                          </svg>
                        </>
                      )}
                    </Field>
                  </div>
                </label>
                <ErrorMessage
                  name="photo"
                  component="p"
                  className={css.errorComent}
                />
              </div>

              <div className={css.wrapperTextareaOne}>
                <label className={css.textareaText} htmlFor="comments">
                  Comments
                </label>
                <Field
                  as="textarea"
                  className={css.textareaAddOne}
                  id="comments"
                  name="comments"
                  placeholder="Type comment"
                />
                <ErrorMessage
                  name="comments"
                  component="p"
                  className={css.comments}
                />
              </div>
              <ul className={css.LinkAddPEt}>
                <li>
                  <button
                    className={css.LinkAddPEtLitkCancel}
                    onClick={() => handlePreviousStep()}
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
                  <button type="submit" className={css.ButtonNext}>
                    <div className={css.ButtonEl}>
                      <span>Done</span>
                      <svg width="24px" height="24px" fill="#fff">
                        <use href={`${sprite}#icon-pawprint-1`}></use>
                      </svg>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ThirdStep;