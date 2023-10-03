import { useSelector } from 'react-redux';
import scss from './personal.module.scss';
import AddButton from 'UI/Button/AddButton/AddButton';
import { selectUser } from 'redux/auth/authSelectors';

export const Pets = () => {
  const user = useSelector(selectUser);
  console.log(user.user.pets);
  return (
    <div>
      <div className={scss.myPets}>
        <h2>My pets:</h2>
        <AddButton />
      </div>
      <div className={scss.petCard}>
        <ul></ul>
      </div>
    </div>
  );
};
