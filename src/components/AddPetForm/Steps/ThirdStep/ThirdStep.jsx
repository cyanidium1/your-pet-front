import css from "./ThreeStep.module.css";
// import next from "../../../../Components/SvgIcons/next.svg";
// import cancel from "../../../../Components/SvgIcons/cancel.svg";
// import PetAdd from "../../../../Components/SvgIcons/PetAdd.svg";
import React, { useState } from "react";
import { validationSchemaThree } from "Shared/validation/addPetValidation";

const ThreeStep = ({ handleNext, handlePreviousStep, formData }) => {
  const [photo, setPhoto] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});

  const handleDone = () => {
    validationSchemaThree
      .validate({ photo, comments }, { abortEarly: false })
      .then(() => {
        handleNext({ photo, comments });
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  return (
    <div>
      <div className={css.wrapperPoto}>
        <label className={css.labelAddText}>Load the {"\n"} pet`s image:</label>
        <div>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <label htmlFor="photo">
          <div className={css.labelAdd}>
            {photo && (
              <img
                className={css.previewPhoto}
                src={URL.createObjectURL(photo)}
                alt="Selected img"
              />
            )}
            <img className={css.iconAdd} src={PetAdd} alt="add" />
          </div>
        </label>
        {errors.photo && <p className={css.errorComent}>{errors.photo}</p>}
      </div>
      <div className={css.wrapperTextareaOne}>
        <label className={css.textareaText} htmlFor="comments">
          Comments
        </label>
        <textarea
          className={css.textareaAddOne}
          id="comments"
          value={comments}
          placeholder="Type comment"
          onChange={(e) => setComments(e.target.value)}
        />
        {errors.comments && <p className={css.comments}>{errors.comments}</p>}
      </div>
      <ul className={css.LinkAddPEt}>
        <li>
          <button
            className={css.LinkAddPEtLitkCancel}
            onClick={() => handlePreviousStep(formData)}
          >
            <div className={css.ButtonEl}>
              {/* <img src={cancel} alt="Next" /> */}
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleDone}>
            <div className={css.ButtonEl}>
              <span>Done </span>
              {/* <img src={next} alt="Next" /> */}
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThreeStep;
