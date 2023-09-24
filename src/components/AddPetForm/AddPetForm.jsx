import React from "react";
import Steps from "./Steps/StepsList";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import ThirdStep from "./Steps/ThirdStep/ThirdStep";
import { useDispatch, useSelector } from "react-redux";
import { selectStepForm } from "redux/adddPetForm/addPetFormSelectors";
import { selectMyPet, selectMyPetStatus } from "redux/myPets/addPetSelectors";
import SecondStepMy from "./Steps/SecondStep/SecondStepMyPet";

const AddPetForm = () => {
  const dispatch = useDispatch();
  const step = useSelector(selectStepForm);
  const status = useSelector(selectMyPetStatus);
  const pet = useSelector(selectMyPet);

  let secondStepComponent;
  switch (status) {
    case "yourPet":
      secondStepComponent = <SecondStepMy formData={pet} />;
      break;
    default:
      secondStepComponent = <SecondStep formData={pet} />;
      break;
  }

  let currentStepComponent;
  switch (step) {
    case 1:
      currentStepComponent = <FirstStep />;
      break;
    case 2:
      currentStepComponent = <SecondStep />;
      break;
    case 3:
      currentStepComponent = <ThirdStep />;
      break;
  }

  return (
    <div className="WrapperAddPet">
      <Steps currentStep={step} />
      {currentStepComponent}
    </div>
  );
};

export default AddPetForm;
