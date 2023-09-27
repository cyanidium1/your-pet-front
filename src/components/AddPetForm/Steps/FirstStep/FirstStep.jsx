import React, { useEffect, useState } from 'react';
import sprite from '../../../../images/icons.svg';
import css from '../../AddPetForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextStep,
  resetSteps,
} from '../../../../redux/adddPetForm/addPetFormSlice';
import {
  selectMyPetID,
  selectMyPetStatus,
  selectMyPetType,
} from '../../../../redux/myPets/addPetSelectors';
import { addPetStatus, resetState } from '../../../../redux/myPets/addPetSlice';

const FirstStep = () => {
  const [petStatus, setPetStatus] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newPetStatus = useSelector(selectMyPetStatus);
  const [isStatusIgnored, setIsStatusIgnored] = useState(false);

  useEffect(() => {
    setPetStatus(newPetStatus);
  }, []);
  const handleSubmit = () => {
    if (!petStatus) {
      setIsStatusIgnored(true);
      return;
    }
    dispatch(addPetStatus(petStatus));
    dispatch(nextStep());
  };
  const handleCancel = () => {
    dispatch(resetState());
    dispatch(resetSteps());
    navigate(-1);
  };

  return (
    <>
      <div className={css.ChooseOptionList}>
        <button
          className={`${css.PetButton} ${
            petStatus === 'yourPet' ? css.PetButtonActive : ''
          }`}
          onClick={
            (() => setIsStatusIgnored(false), () => setPetStatus('yourPet'))
          }
        >
          your pet
        </button>

        <button
          className={`${css.PetButton} ${
            petStatus === 'sell' ? css.PetButtonActive : ''
          }`}
          onClick={
            (() => setIsStatusIgnored(false), () => setPetStatus('sell'))
          }
        >
          sell
        </button>

        <button
          className={`${css.PetButton} ${
            petStatus === 'lost' ? css.PetButtonActive : ''
          }`}
          onClick={
            (() => setIsStatusIgnored(false), () => setPetStatus('lost'))
          }
        >
          lost/found
        </button>

        <button
          className={`${css.PetButton} ${
            petStatus === 'inGoodHands' ? css.PetButtonActive : ''
          }`}
          onClick={
            (() => setIsStatusIgnored(false), () => setPetStatus('inGoodHands'))
          }
        >
          in good hands
        </button>
      </div>
      {isStatusIgnored && <p className={css.ErrorText}>Please set status</p>}
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
