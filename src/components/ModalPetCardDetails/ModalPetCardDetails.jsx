import React, { useEffect, useState } from 'react';
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import modal from './ModalPetCardDetails.module.css';
import {
  closeModalPetCardDetails,
  openModalAttention,
} from 'redux/global/globalSlice';

const ModalPetCardDetails = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModalPetCardDetails());
  };

  const handleAddPetToFavorite = () => {
    dispatch(openModalAttention());
  };

  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  // const handleAddPetToFavorite =()=>{
  //   {
  //     if (isUserLoggedIn) {
  //       dispatch(addPetToFavorite());
  //     } else {
  //       dispatch(openModalAttention());
  //     }
  //   };

  // }

  return (
    <div className={modal.modalPetCardDetailsWrapper}>
      <div className={modal.closeModalIconWrapper} onClick={handleCloseModal}>
        <svg className={modal.closeModalIcon}>
          <use href={sprite + '#icon-cross'}></use>
        </svg>
      </div>
      <div className={modal.imageAndInfoWrapper}>
      <img
        className={modal.petImage}
        src="#"
        alt="pet's image"
        width="240"
        height="240"
      />
      <div>
      <p className={modal.modalTitle}>Сute dog looking for a home</p>
      <table>
        <tbody>
          <tr >
            <td className={modal.boldCell}>
              <strong>Name:</strong>
            </td>
            <td className={modal.normalCell}>Rich</td>
          </tr>
          <tr >
            <td className={modal.boldCell}>
              <strong>Birthday:</strong>
            </td>
            <td className={modal.normalCell}>21.09.2020</td>
          </tr>
          <tr >
            <td className={modal.boldCell}>
              <strong>Type:</strong>
            </td>
            <td className={modal.normalCell}>Pomeranian</td>
          </tr>
          <tr >
            <td className={modal.boldCell}>
              <strong>Place:</strong>
            </td>
            <td className={modal.normalCell}>Lviv</td>
          </tr>
          <tr >
            <td className={modal.boldCell}>
              <strong>The sex:</strong>
            </td>
            <td className={modal.normalCell}>male</td>
          </tr>
          <tr >
            <td className={modal.boldCell}>
              <strong>Email:</strong>
            </td>
            <td className={modal.normalCell}>
              <a href="mailto:user@mail.com" className={modal.link}>
                user@mail.com
              </a>
            </td>
          </tr>
          <tr >
            <td className={modal.boldCell}>
              <strong>Phone:</strong>
            </td>
            <td className={modal.normalCell}>
              <a href="tel:+380971234567" className={modal.link}>
                +380971234567
              </a>
            </td>
          </tr>
         
         
        </tbody>
      </table>
      </div>
      </div>
      <div className={modal.commentsSection}>
      <strong >Comments:</strong> <span>Rich would be the perfect addition to
              an active family that loves to play and go on walks. I bet he
              would love having a doggy playmate too!</span>
      </div>
      
      <div className={modal.modalButtonsWrapper}>
        <button className={modal.contactButton} type="button">
          <a href="tel:№" className={modal.buttonContent}>
            Contact
          </a>
        </button>
        <button
          className={modal.heartButton}
          type="button"
          onClick={handleAddPetToFavorite}
        >
          <div className={modal.buttonContent}>
            <span>Add to </span>
            <svg className={modal.heartIcon}>
              <use href={sprite + '#icon-heart'}></use>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModalPetCardDetails;
