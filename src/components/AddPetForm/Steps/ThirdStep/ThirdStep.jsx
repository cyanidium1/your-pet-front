import React, { useState } from "react";
import css from "./ThirdStep.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required("Photo is required"),
  comments: Yup.string().required("Comment is requiererd"),
});
// add form to redux state and after submt change step to 1

const ThreeStepFound = ({ formData }) => {
  const handlePreviousStep = () => {
    console.log(1);
  };
  const handleFinish = () => {
    console.log(1);
  };

  return (
    <>
      <Formik
        initialValues={{
          photo: formData.url || "",
          place: formData.place || "",
          comments: formData.comments || "",
          sex: formData.sex || "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ values, setFieldValue, isSubmitting }) => (
          <Form onSubmit={() => handleFinish}>
            <div className={css.wrapperForm}>
              <div className={css.wrapperPotoSell}>
                <div className={css.SexText}>The Sex</div>

                <div className={css.wrapperAddPhoto}>
                  <label className={css.labelAddText}>
                    Load the pet’s image:
                  </label>

                  <input
                    type="file"
                    id="photo"
                    onChange={() => console.log(1)}
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
      ></Formik>
    </>
  );
};

export default ThreeStepFound;
