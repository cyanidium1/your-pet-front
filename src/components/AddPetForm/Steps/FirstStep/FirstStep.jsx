import React, { useEffect, useState } from "react";
import sprite from "../../../../images/icons.svg";
import css from "../../AddPetForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  resetSteps,
} from "../../../../redux/adddPetForm/addPetFormSlice";
import {
  selectMyPetID,
  selectMyPetStatus,
  selectMyPetType,
} from "../../../../redux/myPets/addPetSelectors";
import {
  addPetStatus,
  updatePetInfo,
} from "../../../../redux/myPets/addPetOperations";
import { resetState } from "../../../../redux/myPets/addPetSlice";

const FirstStep = () => {
  const [petStatus, setPetStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newPetStatus = useSelector(selectMyPetStatus);
  const petId = useSelector(selectMyPetID);

  useEffect(() => {
    setPetStatus(newPetStatus);
  }, []);
  const handleSubmit = () => {
    const pet = {
      id: petId,
      status: petStatus,
    };
    dispatch(updatePetInfo(pet));
    console.log(newPetStatus);

    dispatch(nextStep());
  };
  const handleCancel = () => {
    dispatch(resetState());
    dispatch(resetSteps());
    console.log(1);
    navigate(-1);
  };

  return (
    <>
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
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-arrow-left`}></use>
            </svg>
            <span>Cancel</span>
          </div>
        </button>

        <button className={css.ButtonNext} onClick={() => handleSubmit()}>
          <div className={css.ButtonEl}>
            <span>Next</span>
            <svg width="24px" height="24px" fill="#fff">
              <use href={`${sprite}#icon-pawprint-1`}></use>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default FirstStep;
