import React from "react";
import { useState } from "react";
import Steps from "./Steps/StepsList";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import ThirdStep from "./Steps/ThirdStep/ThirdStep";

const AddPetForm = () => {
  const [step, setStep] = useState(1); // to redux

  return (
    <div className="WrapperAddPet">
      <Steps currentStep={step} />
      {/* switch according to redux state */}
      <FirstStep />
      {/* also switch according to redux state */}

      {/* <SecondStep /> */}
      {/* <ThirdStep /> */}
    </div>
  );
};

export default AddPetForm;
