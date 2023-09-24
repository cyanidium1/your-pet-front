import React from "react";
import css from "./SecondStep.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "redux/adddPetForm/addPetFormSlice";
import {
  selectMyPetID,
  selectMyPetTitle,
  selectMyPetType,
} from "redux/myPets/addPetSelectors";
import { updatePetInfo } from "redux/myPets/addPetOperations";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title of add is required"), // 6 to 64 symb
  name: Yup.string().required("Name pet is required"),
  birthday: Yup.date().required("Birthday is required"),
  breed: Yup.string().required("Breed is required"),
});

const SecondStepSell = ({ formData }) => {
  const dispatch = useDispatch();
  const title = useSelector(selectMyPetTitle);
  const petId = useSelector(selectMyPetID);

  const handleNext = (values) => {
    const pet = {
      id: petId,
      ...values,
    };
    dispatch(updatePetInfo(pet));
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  return (
    <Formik
      initialValues={{
        title: title,
        name: "",
        birthday: "",
        breed: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
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
            <label className={css.LabelStep} htmlFor="breed">
              Breed
            </label>
            <Field
              className={css.Input}
              type="text"
              id="breed"
              name="breed"
              placeholder="Type breed"
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
                  <span>Back</span>
                </div>
              </button>
            </li>
            <li>
              <button className={css.ButtonNext} type="submit">
                <div className={css.ButtonEl}>
                  <span>Next</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </Form>
    </Formik>
  );
};

export default SecondStepSell;
