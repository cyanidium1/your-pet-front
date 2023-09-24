import React, { useEffect, useState } from "react";
// import next from sprite
// import cancel from sprite
import css from "../../AddPetForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, resetSteps } from "redux/adddPetForm/addPetFormSlice";
import {
  selectMyPetStatus,
  selectMyPetType,
} from "redux/myPets/addPetSelectors";
import { addPetStatus } from "redux/myPets/addPetOperations";

const FirstStep = () => {
  const [petStatus, setPetStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newPetStatus = useSelector(selectMyPetStatus);

  useEffect(() => {
    setPetStatus(newPetStatus);
  }, []);
  const handleSubmit = () => {
    dispatch(addPetStatus(petStatus));
    console.log(newPetStatus);

    dispatch(nextStep());
  };
  const handleCancel = () => {
    dispatch(resetSteps());
    console.log(1);
    navigate(-1);
  };

  return (
    <div>
      <div className={css.ChooseOptionList}>
        <button
          className={`${css.PetButton} ${
            petStatus === "yourPet" ? css.PetButtonActive : ""
          }`}
          onClick={() => setPetStatus("yourPet")}
        >
          your pet
        </button>

        <button
          className={`${css.PetButton} ${
            petStatus === "sell" ? css.PetButtonActive : ""
          }`}
          onClick={() => setPetStatus("sell")}
        >
          sell
        </button>

        <button
          className={`${css.PetButton} ${
            petStatus === "lost" ? css.PetButtonActive : ""
          }`}
          onClick={() => setPetStatus("lost")}
        >
          lost/found
        </button>

        <button
          className={`${css.PetButton} ${
            petStatus === "inGoodHands" ? css.PetButtonActive : ""
          }`}
          onClick={() => setPetStatus("inGoodHands")}
        >
          in good hands
        </button>
      </div>
      <div className={css.LinkAddPEt}>
        <button
          className={css.LinkAddPEtLitkCancel}
          onClick={() => handleCancel()}
        >
          <div className={css.ButtonEl}>
            {/* <img src={cancel} alt="Back" /> */}
            <span>Cancel</span>
          </div>
        </button>

        <button className={css.ButtonNext} onClick={() => handleSubmit()}>
          <div className={css.ButtonEl}>
            <span>Next</span>
            {/* <img src={next} alt="Next" /> */}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
