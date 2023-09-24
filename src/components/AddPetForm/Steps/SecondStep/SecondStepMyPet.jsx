import React from "react";
import css from "./SecondStep.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name pet is required"),
  birthday: Yup.date().required("Birthday is required"),
  breed: Yup.string().required("Breed is required"),
});

const SecondStepMy = ({ formData }) => {
  const handleNext = () => {
    console.log(1);
  };
  const handleBack = () => {
    console.log(2);
  };
  return (
    <Formik
      initialValues={{
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
            <label className={css.LabelStep} htmlFor="name">
              Pet`s name
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
              className={css.Input}
              name="birthday"
              birthday={formData.birthday}
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
                  {/* <img src={cancel} alt="Back" /> */}
                  <span>Back</span>
                </div>
              </button>
            </li>
            <li>
              <button className={css.ButtonNext} type="submit">
                <div className={css.ButtonEl}>
                  <span>Next </span>
                  {/* <img src={next} alt="Next" /> */}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </Form>
    </Formik>
  );
};

export default SecondStepMy;
