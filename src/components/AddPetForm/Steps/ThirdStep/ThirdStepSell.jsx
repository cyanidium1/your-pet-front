import React, { useEffect, useRef, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ThirdStep.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyPet,
  selectMyPetComments,
  selectMyPetImage,
  selectMyPetLocation,
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
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required('Please upload a photo'),
  location: Yup.string()
    .required('Please type a location')
    .matches(
      /^[^!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/,
      'Location should not contain special symbols'
    )
    .matches(
      /^[A-ZА-Я][a-zA-Zа-яА-Я]*$/,
      'Location should start with a capital letter'
    ),
  price: Yup.number('Price should be a number')
    .typeError('Price must be a number')
    .required('Please set a price')
    .min(1, 'price should be bigger than 0'),
  comments: Yup.string()
    .optional()
    .max(120, 'Title must be at most 120 characters'),
});

const ThirdStepSell = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petBody = useSelector(selectMyPet);
  const file = useSelector(selectMyPetImage);
  const comments = useSelector(selectMyPetComments);
  const location = useSelector(selectMyPetLocation);

  const [activeButton, setActiveButton] = useState(null);
  const [sex, setSex] = useState('');
  const [isSexIgnored, setIsSexIgnored] = useState(false);

  // const notifyPetAdded = () => toast('Pet added successfully');

  const handleSubmit = values => {
    if (!sex) {
      setIsSexIgnored(true);
      return;
    }
    const pet = {
      sex,
      ...values,
      price: Number(values.price),
    };
    dispatch(addPetMoreInfo(pet));
    const newPetBody = { ...petBody, ...pet };
    dispatch(addNewPetNotice(newPetBody));
    dispatch(resetSteps());
    dispatch(resetState());
    toast.success('Pet added successfully');
    // dispatch(showNotify());
    navigate(-1);
    // notifyPetAdded();
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
            fill={
              sex === 'female' ? '#fff' : sex === 'male' ? '#888888' : '#F43F5E'
            }
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
            fill={
              sex === 'male' ? '#fff' : sex === 'female' ? '#888888' : '#54ADFF'
            }
            stroke={
              sex === 'male' ? '#fff' : sex === 'female' ? '#888888' : '#54ADFF'
            }
          >
            <use href={`${sprite}#icon-male`}></use>
          </svg>
          Male
        </button>
        {isSexIgnored && <p className={css.sexIgnored}>Sex is required</p>}
      </div>
      <Formik
        initialValues={{ file, comments, location }}
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
                    onKeyPress={e => {
                      e.which === 13 && e.preventDefault();
                    }}
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
                          {!field.value && (
                            <svg
                              width="30px"
                              height="30px"
                              stroke="#54adff"
                              className={css.iconAdd}
                            >
                              <use href={`${sprite}#icon-plus`}></use>
                            </svg>
                          )}
                        </>
                      )}
                    </Field>
                  </div>
                </label>
                <ErrorMessage
                  name="file"
                  component="p"
                  className={css.errorComent}
                />
              </div>
              <div className={css.WrapperLabelInput}>
                <label className={css.LabelStep} htmlFor="name">
                  Location
                </label>
                <Field
                  className={css.Input}
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Type of location"
                  onKeyPress={e => {
                    e.which === 13 && e.preventDefault();
                  }}
                />
                <ErrorMessage
                  name="location"
                  component="p"
                  className={css.ErrorTextLow}
                />
              </div>
              <div className={css.WrapperLabelInput}>
                <label className={css.LabelStep} htmlFor="name">
                  Price
                </label>
                <Field
                  className={css.Input}
                  type="text"
                  id="price"
                  name="price"
                  inputMode="numeric"
                  placeholder="Type of price"
                  onKeyPress={e => {
                    e.which === 13 && e.preventDefault();
                  }}
                />
                <ErrorMessage
                  name="price"
                  component="p"
                  className={css.ErrorTextLow}
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

export default ThirdStepSell;
