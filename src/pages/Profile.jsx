import scss from '../modules/shared/styles/PersonalPage/Personal.module.scss';
import { Card } from '../components/Personal/PersonalCard';
import { Pets } from '../components/Personal/PetsCards';
import { toast } from 'react-toastify';
import { hideNotify } from 'redux/addPetNotify/appPetNotifySlice';
import { useDispatch } from 'react-redux';
const Profile = () => {
  const notifyAdded = () => {
    const dispatch = useDispatch();
    // toast('Pet added successfully!');
    dispatch(hideNotify());
  };
  return (
    <>
      <section className={`container ${scss.section}`}>
        <Card />
        <Pets />
      </section>
      {isAddedNotify && notifyAdded()}
    </>
  );
};

export default Profile;
