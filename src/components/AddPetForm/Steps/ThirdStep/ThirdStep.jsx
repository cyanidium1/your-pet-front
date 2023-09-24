import React from "react";
import css from "./ThirdStep.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { prevStep, resetSteps } from "redux/adddPetForm/addPetFormSlice";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  photo: Yup.mixed().required("Photo is required"),
  comments: Yup.string().required("Comment is required"),
});

const ThreeStepFound = ({ formData }) => {
  const dispatch = useDispatch();

  const handlePreviousStep = () => {
    console.log(1);
    dispatch(prevStep());
  };

  const handleFinish = () => {
    console.log(1);
    dispatch(resetSteps());
  };

  return (
    <>
      <Formik
        initialValues={{
          photo: "",
          place: "",
          comments: "",
          sex: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleFinish();
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div className={css.wrapperForm}>
              <div className={css.wrapperPotoSell}>
                <div className={css.SexText}>
                  The Sex
                  <button>male</button>
                  <button>female</button>
                </div>
                <div className={css.wrapperAddPhoto}>
                  <label className={css.labelAddText}>
                    Load the pet’s image:
                  </label>

                  <Field
                    type="file"
                    id="photo"
                    name="photo"
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
      </Formik>
    </>
  );
};

export default ThreeStepFound;
