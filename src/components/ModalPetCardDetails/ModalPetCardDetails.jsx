import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modal from './ModalPetCardDetails.module.css';
import Button from 'UI/Button/Button';
import { selectSelectedNotice } from 'redux/notices/noticeSelectors';
import { selectUser } from 'redux/auth/authSelectors';
import { openModalAttention } from 'redux/global/globalSlice';
import {
  useAddFavoriteMutation,
  useGetNoticeByIdQuery,
  useRemoveFavoriteMutation,
} from 'redux/notices/noticeQueryOperation';
import LoaderSpinner from 'components/LoaderSpiner/LoaderSpinner';
import NoticeNotFound from 'components/NoticeNotFound/NoticeNotFound';

const ModalPetCardDetails = () => {
  const selectedNotice = useSelector(selectSelectedNotice);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetNoticeByIdQuery(
    selectedNotice._id
  );
  console.log(data);
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
    owner,
    comments,
    favorites,
  } = data?.notice || {};

  const { user = {} } = useSelector(selectUser) || {};
  const [isFavoriteCard, setisFavoriteCard] = useState(
    favorites?.includes(user._id)
  );
  useEffect(() => {
    setisFavoriteCard(favorites?.includes(user._id));
  }, [favorites]);

  const { email, phone } = data?.notice.owner || {};

  const telURI = `tel:${phone}`;
  const birthday = formatDate(date);
  // const birthday = selectedNotice?.formatDate || {};

  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', options);
  }

  const [addToFavorite] = useAddFavoriteMutation();
  const [removeToFavorite] = useRemoveFavoriteMutation();
  const handleToggleFavoriteAds = () => {
    if (Object.keys(user).length === 0) {
      dispatch(openModalAttention());
      document.body.style.overflow = 'hidden';
      return;
    }
    !isFavoriteCard ? addToFavorite(_id) : removeToFavorite(_id);
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (isError) {
    return <NoticeNotFound />;
  }

  return (
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
          text={isFavoriteCard ? 'Remove from ' : 'Add to '}
          isFilled={true}
          // color={isFavoriteCard ? '' : 'blue'}
          svg={'#icon-heart'}
          onClick={handleToggleFavoriteAds}
        />
        <Button
          text={'Contact'}
          onClick={() => (window.location.href = telURI)}
        />
      </div>
    </>
  );
};

export default ModalPetCardDetails;
