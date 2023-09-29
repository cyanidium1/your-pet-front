import React from "react";
import css from "./SecondStep.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
} from "../../../../redux/adddPetForm/addPetFormSlice";
import {
  selectMyPetBirthDate,
  selectMyPetID,
  selectMyPetName,
  selectMyPetType,
} from "../../../../redux/myPets/addPetSelectors";
import { updatePetInfo } from "../../../../redux/myPets/addPetOperations";
import sprite from "../../../../images/icons.svg";
import { addPetPersonalInfo } from "redux/myPets/addPetSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name pet is required"),
  birthday: Yup.date().required("Birthday is required"),
  type: Yup.string().required("Type is required"),
});

const SecondStepSell = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectMyPetName);
  const birthday = useSelector(selectMyPetBirthDate);
  const type = useSelector(selectMyPetType);

  const handleNext = (values) => {
    const pet = {
      ...values,
    };
    dispatch(addPetPersonalInfo(pet));
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <>
      <Formik
        initialValues={{
          name,
          birthDate: Date(birthday),
          type,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleNext(values);
        }}
      >
        <Form>
          <div className={css.FormWrapper}>
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
              <label className={css.LabelStep} htmlFor="birthday">
                Date of birth
              </label>
              <Field
                type="date"
                name="birthday"
                className={css.Input}
                birthday={new Date()}
              />
              <ErrorMessage
                name="birthday"
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
                placeholder="Type of animal"
              />
              <ErrorMessage
                name="breed"
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
    </>
  );
};

export default SecondStepSell;