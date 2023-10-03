import { useSelector } from 'react-redux';
import scss from './personal.module.scss';
import AddButton from 'UI/Button/AddButton/AddButton';
import { selectUser } from 'redux/auth/authSelectors';
import defualtPhoto from '../../images/icons.svg';

export const Pets = () => {
  const user = useSelector(selectUser);
  console.log(user.user.pets);
  return (
    <div className={scss.petsContainer}>
      <div className={scss.myPets}>
        <h2>My pets:</h2>
        <AddButton />
      </div>
      <div className={scss.petsCard}>
        <ul className={scss.petsCardList}>
          {user.user.pets.map((pet, index) => {
            return (
              <li key={index} className={scss.petsListItem}>
                <button type="button" className={scss.petsDelBtn}>
                  <svg className={scss.petsDelBtnSVG}>
                    <use href={`${defualtPhoto}#icon-trash-2`}></use>
                  </svg>
                </button>

                <img src={pet.petURL} className={scss.petsImg} />
                <div className={scss.petsInfoBlock}>
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
        </ul>
      </div>
    </div>
  );
};
