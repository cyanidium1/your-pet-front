import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import modal from './ModalPetCardDetails.module.css';
import Button from 'UI/Button/Button';
import { selectSelectedNotice } from 'redux/notices/noticeSelectors';
import { Modal } from 'components/Modal/Modal';
import { useLocation } from "react-use";

const ModalPetCardDetails = () => {
  const selectedNotice = useSelector(selectSelectedNotice);

  // console.log(selectedNotice);

  const {
    title,
    name,
    _id,
    file,
    category,
    date,
    type,
    location,
    sex,
    comments,
  } = selectedNotice?.notice || {};
 
  const { email, phone } = selectedNotice?.notice.owner || {};

  const telURI = `tel:${phone}`;
  const birthday = formatDate(date);
  // const birthday = selectedNotice?.formatDate || {};

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', options);
  }

  // const { pathname } = useLocation();
  // const categoryPath = pathname.split('/').slice(-1).join('');
  // const [isFavorite, setIsFavorite] = useState(false);

  // const handleToggleFavoriteAds = () => {
  //   isFavoriteCard
  //     ? dispatch(
  //         removeNoticeToFavoriteThunk({ _id, thunk: routerThunk[categoryPath] })
  //       ).then(setIsFavoriteCard(false))
  //     : dispatch(addNoticeToFavoriteThunk(_id)).then(setIsFavoriteCard(true));
  // };

  
  return (
    // <Modal closeReducer={() => setIsModalOpen(false)} >
      <>
      <div className={modal.modalPetCardDetailsWrapper} key={_id}>
        <div className={modal.imageWrapper}>
          <h6 className={modal.category}>{category}</h6>
          <img
            className={modal.petImage}
            src={file}
            alt="pet's image"
            width="240"
            height="240"
          />
        </div>
        <div>
          <h5 className={modal.modalTitle}>{title}</h5>
          <table>
            <tbody>
              <tr>
                <td className={modal.boldCell}>
                  <strong>Name:</strong>
                </td>
                <td className={modal.normalCell}>{name}</td>
              </tr>
              <tr>
                <td className={modal.boldCell}>
                  <strong>Birthday:</strong>
                </td>
                <td className={modal.normalCell}>{birthday}</td>
              </tr>
              <tr>
                <td className={modal.boldCell}>
                  <strong>Type:</strong>
                </td>
                <td className={modal.normalCell}>{type}</td>
              </tr>
              <tr>
                <td className={modal.boldCell}>
                  <strong>Place:</strong>
                </td>
                <td className={modal.normalCell}>{location}</td>
              </tr>
              <tr>
                <td className={modal.boldCell}>
                  <strong>The sex:</strong>
                </td>
                <td className={modal.normalCell}>{sex}</td>
              </tr>
              <tr>
                <td className={modal.boldCell}>
                  <strong>Email:</strong>
                </td>
                <td className={modal.normalCell}>
                  <a href="mailto:user@mail.com" className={modal.link}>
                    {email}
                  </a>
                </td>
              </tr>
              <tr>
                <td className={modal.boldCell}>
                  <strong>Phone:</strong>
                </td>
                <td className={modal.normalCell}>
                  <a href="tel:+380971234567" className={modal.link}>
                    {phone}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={modal.commentsSection}>
        {comments ? (
          <>
            <strong>Comments:</strong> <span>{comments}</span>
          </>
        ) : null}
      </div>

      <div className={modal.modalButtonsWrapper}>
        <Button
          text={'Contact'}
          onClick={() => (window.location.href = telURI)}
        />
        <Button
          // text={isFavorite ? 'Remove from ' : 'Add to '}
          isFilled={true}
          // color={isFavorite ? '' : 'blue'}
          svg={'#icon-heart'}
          // onClick={handleToggleFavoriteAds}
          onClick={() => handleToggleFavoriteAds(_id)}
        />
      </div>
      </>
    // </Modal>
  );
};

export default ModalPetCardDetails;

// ModalPetCardDetails.propTypes = {
//   setIsModalPetCardDetailsOpen: PropTypes.func,
// };




