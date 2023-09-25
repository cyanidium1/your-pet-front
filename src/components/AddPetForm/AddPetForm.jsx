import React from "react";
import Steps from "./Steps/StepsList";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import ThirdStep from "./Steps/ThirdStep/ThirdStep";
import { useDispatch, useSelector } from "react-redux";
import { selectStepForm } from "../../redux/adddPetForm/addPetFormSelectors";
import {
  selectMyPet,
  selectMyPetStatus,
} from "../../redux/myPets/addPetSelectors";
import SecondStepMy from "./Steps/SecondStep/SecondStepMyPet";
import ThirdStepSell from "./Steps/ThirdStep/ThirdStepSell";
import ThirdStepFoundOrGoodHands from "./Steps/ThirdStep/ThirdStepFoundOrGoodHands";
import css from "./AddPetForm.module.css";

const AddPetForm = () => {
  const dispatch = useDispatch();
  const step = useSelector(selectStepForm);
  const status = useSelector(selectMyPetStatus);

  let secondStepComponent;
  switch (status) {
    case "yourPet":
      secondStepComponent = <SecondStepMy />;
      break;
    default:
      secondStepComponent = <SecondStep />;
      break;
  }

  let thirdStepComponent;
  switch (status) {
    case "sell":
      thirdStepComponent = <ThirdStepSell />;
      break;
    case "lost" || "inGoodHands":
      thirdStepComponent = <ThirdStepFoundOrGoodHands />;
      break;
    default:
      thirdStepComponent = <ThirdStep />;
      break;
  }

  let currentStepComponent;
  switch (step) {
    case 1:
      currentStepComponent = <FirstStep />;
      break;
    case 2:
      currentStepComponent = secondStepComponent;
      break;
    case 3:
      currentStepComponent = thirdStepComponent;
      break;
  }

  return (
    <section>
      <div className={css.WrapperAddPet}>
        <h2>
          add{status === "lost" ? " lost " : " "}pet
          {status === "sell" ? " for sell " : " "}
        </h2>
        <Steps currentStep={step} />
        {currentStepComponent}
      </div>
    </section>
  );
};

export default AddPetForm;
