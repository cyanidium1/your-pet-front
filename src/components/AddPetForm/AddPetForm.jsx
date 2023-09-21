import React from "react";
import { useState } from "react";
import Steps from "./Steps/StepsList";

const AddPetForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="WrapperAddPet">
      <Steps currentStep={step} />
      {/* переписати на редакс */}
    </div>
  );
};

export default AddPetForm;
