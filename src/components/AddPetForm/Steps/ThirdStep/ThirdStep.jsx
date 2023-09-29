import React, { useRef, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ThirdStep.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyPet,
  selectMyPetComments,
  selectMyPetID,
  selectMyPetImage,
} from 'redux/myPets/addPetSelectors';
import {
  addNewPet,
  updatePetInfo,
} from '../../../../redux/myPets/addPetOperations';
import {
  prevStep,
  resetSteps,
} from '../../../../redux/adddPetForm/addPetFormSlice';
import { useNavigate } from 'react-router-dom';
import {
  addPetMoreInfo,
  addPetPersonalInfo,
  resetState,
} from '../../../../redux/myPets/addPetSlice';
import sprite from '../../../../images/icons.svg';

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required('Please upload a photo'),
  comments: Yup.string()
    .optional()
    .max(120, 'Title must be at most 120 characters'),
});

const ThirdStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photo = useSelector(selectMyPetImage);
  const comments = useSelector(selectMyPetComments);
  const [activeButton, setActiveButton] = useState(null);
  const [sex, setSex] = useState('');
  const isButtonInactiveFirstTime = useRef(true);
  const petBody = useSelector(selectMyPet);

  const handleSubmit = values => {
    if (!activeButton) {
      isButtonInactiveFirstTime.current = false;
      return;
    }
    const pet = {
      sex,
      id: crypto.randomUUID(),
      ...values,
      photo: URL.createObjectURL(values.photo),
    };
    const newPetBody = { ...petBody, ...pet };
    dispatch(addPetMoreInfo(pet));
    dispatch(addNewPet(newPetBody));
    dispatch(resetState());
    // navigate(-1);
    dispatch(resetSteps());
  };

  const handlePreviousStep = () => {
    dispatch(prevStep());
  };

  const handleOptionChange = (option, number) => {
    setSex(option);
    setActiveButton(number);
    isButtonInactiveFirstTime.current = false;
  };
  return (
    <>
      <div className={css.sexOption}>
        <button
          className={`${css.sexElement} ${
            activeButton === 1 ? css.sexElementActive : ''
          }`}
          type="button"
          onClick={() => handleOptionChange('female', 1)}
        >
          <svg
            width="24px"
            height="24px"
            stroke={
              sex === 'female' ? '#fff' : sex === 'male' ? '#888888' : '#F43F5E'
            }
          >
            <use href={`${sprite}#icon-female`}></use>
          </svg>
          Female
        </button>
        <button
          className={`${css.sexElement} ${
            activeButton === 2 ? css.sexElementActive : ''
          }`}
          onClick={() => handleOptionChange('male', 2)}
        >
          <svg
            width="24px"
            height="24px"
            stroke={
              sex === 'male' ? '#fff' : sex === 'female' ? '#888888' : '#54ADFF'
            }
          >
            <use href={`${sprite}#icon-male`}></use>
          </svg>
          Male
        </button>
        {!activeButton && !isButtonInactiveFirstTime && (
          <p className={css.errorComent}>Sex s required</p>
        )}
      </div>
      <Formik
        initialValues={{ photo, comments }}
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
                    id="photo"
                    name="photo"
                    onChange={e => {
                      setFieldValue('photo', e.currentTarget.files[0]);
                    }}
                    style={{ display: 'none' }}
                  />
                </div>
                <label htmlFor="photo">
                  <div className={css.labelAdd}>
                    <Field name="photo">
                      {({ field }) => (
                        <>
                          {field.value && (
                            <img
                              className={css.previewPhoto}
                              src={URL.createObjectURL(field.value)}
                              alt="Selected img"
                            />
                          )}
                          <svg width="30px" height="30px">
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
