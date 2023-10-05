import React, { useEffect } from 'react';
import Steps from './Steps/StepsList';
import FirstStep from './Steps/FirstStep/FirstStep';
import SecondStep from './Steps/SecondStep/SecondStep';
import ThirdStep from './Steps/ThirdStep/ThirdStep';
import { useDispatch, useSelector } from 'react-redux';
import { selectStepForm } from '../../redux/adddPetForm/addPetFormSelectors';
import {
  selectMyPet,
  selectMyPetStatus,
} from '../../redux/myPets/addPetSelectors';
import SecondStepMy from './Steps/SecondStep/SecondStepMyPet';
import ThirdStepSell from './Steps/ThirdStep/ThirdStepSell';
import ThirdStepFoundOrGoodHands from './Steps/ThirdStep/ThirdStepFoundOrGoodHands';
import css from './AddPetForm.module.css';
import { selectToken } from 'redux/auth/authSelectors';
import { addPetInstance } from 'redux/myPets/addPetOperations';
import { ToastContainer } from 'react-toastify';
import { refreshUser } from 'redux/auth/authOperations';
refreshUser;

const AddPetForm = () => {
  const dispatch = useDispatch();
  const step = useSelector(selectStepForm);
  const status = useSelector(selectMyPetStatus);
  const token = useSelector(selectToken);
  addPetInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  let secondStepComponent;
  switch (status) {
    case 'yourPet':
      secondStepComponent = <SecondStepMy />;
      break;
    default:
      secondStepComponent = <SecondStep />;
      break;
  }

  let thirdStepComponent;
  switch (status) {
    case 'sell':
      thirdStepComponent = <ThirdStepSell />;
      break;
    case 'lost-found':
      thirdStepComponent = <ThirdStepFoundOrGoodHands />;
      break;
    case 'in-good-hands':
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
    <>
      <section>
        <div className={css.AddPetSectionWrapper}>
          <div className={css.WrapperAddPet}>
            <h2 className={css.AddPetHeading}>
              Add{status === 'lost-found' ? ' lost ' : ' '}pet
              {status === 'sell' ? ' for sell ' : ' '}
            </h2>
            <Steps currentStep={step} />
            {currentStepComponent}
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPetForm;
