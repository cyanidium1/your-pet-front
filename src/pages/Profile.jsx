import scss from '../modules/shared/styles/PersonalPage/Personal.module.scss';
import { Card } from '../components/Personal/PersonalCard';
import { Pets } from '../components/Personal/PetsCards';
import { toast } from 'react-toastify';
import { hideNotify } from 'redux/addPetNotify/appPetNotifySlice';
import { useDispatch } from 'react-redux';
const Profile = () => {
  return (
    <>
      <section className={`container ${scss.section}`}>
        <Card />
        <Pets />
      </section>
    </>
  );
};

export default Profile;
