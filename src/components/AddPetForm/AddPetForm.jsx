import React from "react";
import { useState } from "react";
import Steps from "./Steps/StepsList";
import FirstStep from "./Steps/FirstStep/FirstStep";

const AddPetForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="WrapperAddPet">
      {/* <Steps currentStep={step} /> */}
      <FirstStep />
    </div>
  );
};

export default AddPetForm;
