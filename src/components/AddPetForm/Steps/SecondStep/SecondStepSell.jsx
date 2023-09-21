import React, { useState } from "react";
import css from "./SecondStep.module.css";
import next from "../../../../Components/SvgIcons/next.svg";
import cancel from "../../../../Components/SvgIcons/cancel.svg";
import { validationSchemaSell } from "Shared/validation/addPetValidation";
import CustomDatePicker from "Components/TimePicker/CustomDatePicker/CustomDatePicker";

const SecondStepSell = ({ handleNext, handlePreviousStep, formData }) => {
  const [name, setName] = useState(formData.name || "");
  const [title, setTitle] = useState(formData.title || "");
  const [birthday, setBirthday] = useState(formData.birthday || "");
  const [breed, setBreed] = useState(formData.breed || "");
  const [errors, setErrors] = useState({});

  const handleNextValidation = () => {
    validationSchemaSell
      .validate({ name, birthday, breed, title }, { abortEarly: false })
      .then(() => {
        handleNext({ name, birthday, breed, title });
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  const setBirthdayWrapper = (brd) => {
    setBirthday(brd);
  };

  return (
    <div className={css.FormWrapper}>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Title of add
        </label>
        <input
          className={css.Input}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type add title"
        />
        {errors.title && <p className={css.ErrorTextLow}>{errors.title}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Name pet
        </label>
        <input
          className={css.Input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type pet name"
        />
        {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <CustomDatePicker
          className={css.Input}
          setBirthdayWrapper={setBirthdayWrapper}
          birthday={birthday}
        />

        {errors.birthday && <p className={css.ErrorText}>{errors.birthday}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="breed">
          Breed
        </label>
        <input
          className={css.Input}
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
          placeholder="Type breed"
        />
        {errors.breed && <p className={css.ErrorTextLow}>{errors.breed}</p>}
      </div>
      <ul className={css.LinkAddPEt}>
        <li>
          <button
            className={css.LinkAddPEtLitkCancel}
            onClick={() => handlePreviousStep(formData)}
          >
            <div className={css.ButtonEl}>
              <img src={cancel} alt="Next" />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleNextValidation}>
            <div className={css.ButtonEl}>
              <span>Next </span>
              <img src={next} alt="Next" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SecondStepSell;
