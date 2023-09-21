import React, { useState } from "react";
// import next from sprite
// import cancel from sprite
import css from "../../AddPetForm.module.css";
import { useNavigate } from "react-router-dom";

const FirstStep = () => {
  const [petStatus, setPetStatus] = useState("initialState");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(petStatus);
    // add state to redux and navigate to next stage
  };
  const handleCancel = () => {
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
          onClick={() => handleCancel}
        >
          <div className={css.ButtonEl}>
            {/* <img src={cancel} alt="Next" /> */}
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
