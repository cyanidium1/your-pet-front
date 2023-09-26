import React from 'react';
import { Modal } from "components/Modal/Modal";
import sprite from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import modal from "./ModalPetCardDetails.module.css"

const ModalPetCardDetails = () => {
    // const user = useSelector(selectUser);
    // const dispatch = useDispatch();
  
    // const handleLogOut = () => {
    //   dispatch(logOut())
    //     .unwrap()
    //     .then(data => {
    //       toast.success(
    //         `You have successfully logged out. We hope to see you back soon!`
    //       );
    //     });
    //   dispatch(closeModalLogout());
    return (
        <Modal>
          <div className={modal.modalPetCardDetailsWrapper}>
          <div class={modal.closeModalIconWrapper} >
            <svg className={modal.closeModalIcon}>
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </div>
          <img src="#" alt="pet's image" width="240" height="240" />
          <h2>Сute dog looking 
for a home</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>Rich</td>
          </tr>
          <tr>
            <td><strong>Birthday:</strong></td>
            <td>21.09.2020</td>
          </tr>
          <tr>
            <td><strong>Type</strong></td>
            <td>Pomeranian</td>
          </tr>
          <tr>
            <td><strong>Place:</strong></td>
            <td>Lviv</td>
          </tr>
          <tr>
            <td><strong>The sex:</strong></td>
            <td>male</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href={`mailto:#`}>user@mail.com</a></td>
          </tr>
          <tr>
          <td><strong>Phone:</strong></td>
          <td><a href={`tel:#`}>+380971234567</a></td>
          </tr>
          <tr>
            <td colSpan="2"><strong>Comments:</strong></td>
          </tr>
          <tr>
            <td colSpan="2"> Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! </td>
          </tr>
        </tbody>
      </table>
          <div className={modal.modalButtonsWrapper}>
          <button
            className={modal.contactButton}
            type="button"
            // onClick={() => dispatch(closeModalLogout())}
            variant={'secondary'}
          >
            Contact
          </button>
          <button
            className={modal.heartButton}
            type="button"
            // onClick={handleLogOut}
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
        </Modal>
      );
    };
  
    
 
  
  export default ModalPetCardDetails;