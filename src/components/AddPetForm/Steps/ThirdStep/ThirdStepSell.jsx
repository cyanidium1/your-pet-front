import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ThreeStep.module.css";

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required("Photo is required"),
  location: Yup.string().required("Location is required"),
  price: Yup.string().required("Price is required"),
  comments: Yup.string().required("Comment is required"),
  sex: Yup.string().required("Sex is required"),
});

// add form to redux state and after submt change step to 1

const ThreeStepSell = ({ handleNext, handlePreviousStep, formData }) => {
  return (
    <Formik
      initialValues={{
        photo: formData.url || "",
        place: formData.place || "",
        price: formData.price || "",
        comments: formData.comments || "",
        sex: formData.sex || "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleNext(values);
        setSubmitting(false);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>
          <div className={css.wrapperForm}>
            <div className={css.wrapperPotoSell}>
              <div className={css.SexText}>The Sex</div>
              <ul className={css.sexOption}>
                <li>
                  <button
                    className={`${css.sexElement} ${
                      values.sex === "female" ? css.sexElementActive : ""
                    }`}
                    type="button"
                    onClick={() => console.log(1)}
                  >
                    Female
                  </button>
                </li>
                <li>
                  <button
                    className={`${css.sexElement} ${
                      values.sex === "male" ? css.sexElementActive : ""
                    }`}
                    type="button"
                    onClick={() => console.log(1)}
                  >
                    Male
                  </button>
                </li>
              </ul>
              <div className={css.wrapperAddPhoto}>
                <label className={css.labelAddText}>
                  Load the pet’s image:
                </label>

                <input
                  type="file"
                  id="photo"
                  onChange={() => console.log(1)}
                  style={{ display: "none" }}
                />

                <label htmlFor="photo">
                  <div className={css.labelAdd}>
                    {values.photo && (
                      <img
                        className={css.previewPhoto}
                        src={URL.createObjectURL(values.photo)}
                        alt="Selected img"
                      />
                    )}
                  </div>
                </label>
                <ErrorMessage
                  name="photo"
                  component="p"
                  className={css.errorComentSell}
                />
              </div>
            </div>
            <div className={css.wrapperFormSellInputs}>
              <div className={css.labelInput}>
                <label className={css.LabelStep} htmlFor="place">
                  Location
                </label>
                <Field
                  className={css.Input}
                  type="text"
                  id="place"
                  name="place"
                  placeholder="Type location"
                />
                <ErrorMessage
                  name="place"
                  component="p"
                  className={css.ErrorTextLow}
                />
              </div>
              <div className={css.labelInput}>
                <label className={css.LabelStep} htmlFor="price">
                  Price
                </label>
                <Field
                  className={css.Input}
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Type price"
                />
                <ErrorMessage
                  name="price"
                  component="p"
                  className={css.ErrorTextLow}
                />
              </div>
              <div className={css.wrapperTextarea}>
                <label className={css.textareaText} htmlFor="comments">
                  Comments
                </label>
                <Field
                  className={css.textareaAddOne}
                  component="textarea"
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
            </div>
          </div>
          <div className={css.LinkAddPEt}>
            <button
              className={css.LinkAddPEtLitkCancel}
              onClick={() => handlePreviousStep(formData)}
            >
              <div className={css.ButtonEl}>
                <span>Back</span>
              </div>
            </button>

            <button
              className={css.ButtonNext}
              type="submit"
              disabled={isSubmitting}
            >
              <div className={css.ButtonEl}>
                <span>Done</span>
              </div>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ThreeStepSell;
