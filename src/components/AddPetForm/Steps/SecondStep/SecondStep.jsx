import React from "react";
import css from "./SecondStep.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title of add is required"),
  name: Yup.string().required("Name pet is required"),
  birthday: Yup.date().required("Birthday is required"),
  breed: Yup.string().required("Breed is required"),
});

const SecondStepSell = ({ formData }) => {
  const handleNext = () => {
    console.log(1);
  };
  const handleBack = () => {
    console.log(2);
  };
  return (
    <Formik
      initialValues={{
        title: formData.title || "",
        name: formData.name || "",
        birthday: formData.birthday || "",
        breed: formData.breed || "",
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

export default SecondStepSell;
