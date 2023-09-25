import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewPet } from "redux/myPets/addPetOperations";

const AddPetBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addNewPet());
    navigate("/add-pet");
  };
  return <button onClick={handleClick}>add pet</button>;
};

export default AddPetBtn;
