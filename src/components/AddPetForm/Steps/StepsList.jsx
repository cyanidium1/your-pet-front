import React from "react";
import css from "../AddPetForm.module.css";
const StepsList = ({ currentStep }) => {
  return (
    <ul className={css.StepList}>
      <li
        className={`${
          currentStep === 1 ? css.StepItemCurrent : css.StepItemDone
        }`}
      >
        Choose option
      </li>
      <li
        className={`${
          currentStep === 2
            ? css.StepItemCurrent
            : css.StepItem && currentStep === 3
            ? css.StepItemDone
            : css.StepItem
        }`}
      >
        Personal details
      </li>
      <li
        className={`${currentStep === 3 ? css.StepItemCurrent : css.StepItem}`}
      >
        More info
      </li>
    </ul>
  );
};

export default StepsList;
