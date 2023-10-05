import scss from '../modules/shared/styles/PersonalPage/Personal.module.scss';
import { Card } from '../components/Personal/PersonalCard';
import { Pets } from '../components/Personal/PetsCards';

const Profile = () => {
  return (
    <>
      <section className={scss.container}>
        <Card />
        <Pets />
      </section>
    </>
  );
};

export default Profile;
