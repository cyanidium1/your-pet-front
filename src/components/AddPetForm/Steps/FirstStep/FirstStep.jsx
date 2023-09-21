import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "../../AddPetPage.module.css";

const FirstStep = ({ handleNext, handleCancel }) => {
  const initialValues = {
    petCategory: "",
  };

  const validationSchema = Yup.object().shape({
    petCategory: Yup.string().required("Please select a category"),
  });

  const handleSubmit = (values) => {
    handleNext(values.petCategory);
    // here should be writing to state
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => handleSubmit}
      >
        <Form>
          <ul className={css.ChooseOptionList}>
            <li>
              <label className={`${css.PetButton}`}>
                <Field type="radio" name="petCategory" value="your-pet" />
                your pet
              </label>
            </li>
            <li>
              <label className={`${css.PetButton}`}>
                <Field type="radio" name="petCategory" value="sell" />
                sell
              </label>
            </li>
            <li>
              <label className={`${css.PetButton}`}>
                <Field type="radio" name="petCategory" value="lost-found" />
                lost/found
              </label>
            </li>
            <li>
              <label className={`${css.PetButton}`}>
                <Field type="radio" name="petCategory" value="in-good-hands" />
                in good hands
              </label>
            </li>
          </ul>
          <ul className={css.LinkAddPEt}>
            <li>
              <button
                className={css.LinkAddPEtLitkCancel}
                onClick={handleCancel}
              >
                <div className={css.ButtonEl}>
                  <span>Cancel</span>
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
        </Form>
      </Formik>
    </div>
  );
};

export default FirstStep;
