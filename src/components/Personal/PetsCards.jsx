import { useSelector } from 'react-redux';
import scss from './personal.module.scss';
import AddPetBtn from 'components/AddPetBtn/addPetBtn';
import { selectUserPets, selectUser } from 'redux/auth/authSelectors';
import defualtPhoto from '../../images/icons.svg';
import { useDeletePetMutation } from 'redux/notices/noticeQueryOperation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import spyNoPets from 'images/spy/hellofromteam2.webp';

export const Pets = () => {
  const user = useSelector(selectUserPets);
  const [deletePets] = useDeletePetMutation();
  const dispatch = useDispatch();

  return (
    <div className={scss.petsContainer}>
      <div className={scss.myPets}>
        <h2>My pets:</h2>
        <AddPetBtn />
      </div>
      <div className={scss.petsCard}>
        <ul className={scss.petsCardList}>
          {user?.map((pet, index) => {
            return (
              <li key={index} className={scss.petsListItem}>
                <img src={pet.petURL} className={scss.petsImg} />
                <div className={scss.petsInfoBlock}>
                  <button
                    type="button"
                    className={scss.petsDelBtn}
                    onClick={async () => {
                      await deletePets(pet._id);
                      dispatch(refreshUser());
                    }}
                  >
                    <svg className={scss.petsDelBtnSVG}>
                      <use href={`${defualtPhoto}#icon-trash-2`}></use>
                    </svg>
                  </button>
                  <div className={scss.petsInfo}>
                    <h3>Name:</h3>
                    <div>{pet.name}</div>
                  </div>
                  <div className={scss.petsInfo}>
                    <h3>Date of birth:</h3>
                    <div>{pet.dateOfBirth}</div>
                  </div>
                  <div className={scss.petsInfo}>
                    <h3>Type:</h3>
                    <div>{pet.type}</div>
                  </div>
                  <div className={scss.petsInfo}>
                    <h3>Comments:</h3>
                    <div>{pet.comments}</div>
                  </div>
                </div>
              </li>
            );
          })}
          {user?.length === 0 && (
            <div className={scss.spyIMG}>
              <img src={spyNoPets}></img>
              <p>
                You have not added your pets, if you want to add them, click on
                the button "Add pet"
              </p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
