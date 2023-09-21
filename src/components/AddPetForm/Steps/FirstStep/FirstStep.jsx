import React from "react";
import css from "../AddPetForm.module.css";

const FirstStep = ({
  handleNext,
  handleCancel,
  handleOptionChange,
  activeButton,
}) => {
  const handleSelectCategory = () => {
    handleNext({});
  };

  return (
    <div>
      <ul className={css.ChooseOptionList}>
        <li>
          <button
            className={`${css.PetButton} ${
              activeButton === 1 ? css.PetButtonActive : ""
            }`}
            onClick={() => handleOptionChange("your-pet", 1)}
          >
            your pet
          </button>
        </li>
        <li>
          <button
            className={`${css.PetButton} ${
              activeButton === 2 ? css.PetButtonActive : ""
            }`}
            onClick={() => handleOptionChange("sell", 2)}
          >
            sell
          </button>
        </li>
        <li>
          <button
            className={`${css.PetButton} ${
              activeButton === 3 ? css.PetButtonActive : ""
            }`}
            onClick={() => handleOptionChange("lost-found", 3)}
          >
            lost/found
          </button>
        </li>
        <li>
          <button
            className={`${css.PetButton} ${
              activeButton === 4 ? css.PetButtonActive : ""
            }`}
            onClick={() => handleOptionChange("in-good-hands", 4)}
          >
            in good hands
          </button>
        </li>
      </ul>
      <ul className={css.LinkAddPEt}>
        <li>
          <button className={css.LinkAddPEtLitkCancel} onClick={handleCancel}>
            <div className={css.ButtonEl}>
              {/* <img src={cancel} alt="Next" /> */}
              <span>Cancel</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleSelectCategory}>
            <div className={css.ButtonEl}>
              <span>Next</span>
              {/* <img src={next} alt="Next" /> */}
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FirstStep;
