import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ThirdStep.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMyPetComments,
  selectMyPetID,
  selectMyPetImage,
} from "redux/myPets/addPetSelectors";
import { updatePetInfo } from "../../../../redux/myPets/addPetOperations";
import {
  prevStep,
  resetSteps,
} from "../../../../redux/adddPetForm/addPetFormSlice";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../../../redux/myPets/addPetSlice";
import sprite from "../../../../images/icons.svg";

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required("Please upload a photo"),
  location: Yup.string().required("Please type a location"),
  comments: Yup.string()
    .optional()
    .max(120, "Title must be at most 120 characters"),
});

const ThirdStepFoundOrGoodHands = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petId = useSelector(selectMyPetID);
  const photo = useSelector(selectMyPetImage);
  const comments = useSelector(selectMyPetComments);
  const [activeButton, setActiveButton] = useState(null);

  const [sex, setSex] = useState("");

  const handleSubmit = (values) => {
    if (!activeButton) {
      return;
    }
    const pet = {
      id: petId,
      sex,
      ...values,
    };
    dispatch(updatePetInfo(pet));
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
  };
  return (
    <>
      <h2>Add your pet</h2>
      <div className={css.sexOption}>
        <button
          className={`${css.sexElement} ${
            activeButton === 1 ? css.sexElementActive : ""
          }`}
          type="button"
          onClick={() => handleOptionChange("female", 1)}
        >
          {/* <img src={female} alt="female" /> */}
          Female
        </button>
        <button
          className={`${css.sexElement} ${
            activeButton === 2 ? css.sexElementActive : ""
          }`}
          onClick={() => handleOptionChange("male", 2)}
        >
          {/* <img src={male} alt="male" /> */}
          Male
        </button>
        {!activeButton && <p>sex is</p>}
      </div>
      <Formik
        initialValues={{ photo, comments }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
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
                    onChange={(e) => {
                      setFieldValue("photo", e.currentTarget.files[0]);
                    }}
                    style={{ display: "none" }}
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
                              src={
                                field.value instanceof Blob
                                  ? URL.createObjectURL(field.value)
                                  : field.value
                              }
                              alt="Selected img"
                            />
                          )}
                          <svg width="30px" height="30px">
                            <use href={`${sprite}#icon-pawprint-1`}></use>
                          </svg>
                          <pre>{JSON.stringify(field.value, null, 2)}</pre>
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
                />
                <ErrorMessage
                  name="location"
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

export default ThirdStepFoundOrGoodHands;
