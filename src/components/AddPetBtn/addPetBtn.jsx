import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import css from './addPetBtn.module.css';
import sprite from '../../images/icons.svg';

const AddPetBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Link to="/add-pet" className={css.addBtn}>
      Add pet
      <svg width="24px" height="24px" stroke="#fff">
        <use href={`${sprite}#icon-plus-small`}></use>
      </svg>
    </Link>
  );
};

export default AddPetBtn;