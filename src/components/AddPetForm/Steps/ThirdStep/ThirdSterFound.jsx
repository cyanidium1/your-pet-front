// import next from "../../../../Components/SvgIcons/next.svg";
// import cancel from "../../../../Components/SvgIcons/cancel.svg";
// import PetAdd from "../../../../Components/SvgIcons/PetAdd.svg";
// import female from "../../../../Components/SvgIcons/female.svg";
// import male from "../../../../Components/SvgIcons/male.svg";
import React, { useState } from "react";
import css from "./ThreeStep.module.css";
import { validationSchemaThree } from "Shared/validation/addPetValidation";

const ThreeStepFound = ({ handleNext, handlePreviousStep, formData }) => {
  const [photo, setPhoto] = useState(formData.url || "");
  const [comments, setComments] = useState(formData.comments || "");
  const [place, setPlace] = useState(formData.place || "");
  const [sex, setSex] = useState(formData.sex || "");

  const [activeButton, setActiveButton] = useState(null);

  const handleOptionChange = (option, number) => {
    setSex(option);
    setActiveButton(number);
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  return (
    <>
      <div className={css.wrapperForm}>
        <div className={css.wrapperPotoSell}>
          <div className={css.SexText}>The Sex</div>
          <ul className={css.sexOption}>
            <li>
              <button
                className={`${css.sexElement} ${
                  activeButton === 1 ? css.sexElementActive : ""
                }`}
                type="button"
                onClick={() => handleOptionChange("female", 1)}
              >
                {/* <img src={female} alt="female" /> */}
                Female
              </button>
            </li>
            <li>
              <button
                className={`${css.sexElement} ${
                  activeButton === 2 ? css.sexElementActive : ""
                }`}
                onClick={() => handleOptionChange("male", 2)}
              >
                {/* <img src={male} alt="male" /> */}
                Male
              </button>
            </li>
          </ul>
          <div className={css.wrapperAddPhoto}>
            <label className={css.labelAddText}>Load the pet’s image:</label>

            <input
              type="file"
              id="photo"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <label htmlFor="photo">
              <div className={css.labelAdd}>
                {photo && (
                  <img
                    className={css.previewPhoto}
                    // src={URL.createObjectURL(photo)}
                    alt="Selected img"
                  />
                )}
                <img className={css.iconAdd} src={PetAdd} alt="add" />
              </div>
            </label>
            {errors.photo && (
              <p className={css.errorComentSell}>{errors.photo}</p>
            )}
          </div>
        </div>
        <div className={css.wrapperFormSellInputs}>
          <div className={css.labelInput}>
            <label className={css.LabelStep} htmlFor="name">
              Location
            </label>
            <input
              className={css.Input}
              type="text"
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Type location"
            />
            {errors.place && <p className={css.ErrorTextLow}>{errors.place}</p>}
          </div>
          <div className={css.wrapperTextarea}>
            <label className={css.textareaText} htmlFor="comments">
              Comments
            </label>
            <textarea
              className={css.textareaAdd}
              id="comments"
              value={comments}
              placeholder="Type comment"
              onChange={(e) => setComments(e.target.value)}
            />
            {errors.comments && (
              <p className={css.comments}>{errors.comments}</p>
            )}
          </div>
        </div>
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
          <button
            className={css.ButtonNext}
            onClick={handleNext({ photo, comments, place, sex })}
          >
            <div className={css.ButtonEl}>
              <span>Done </span>
              {/* <img src={next} alt="Next" /> */}
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default ThreeStepFound;
