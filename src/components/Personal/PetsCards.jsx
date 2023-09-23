import scss from './personal.module.scss';
export const Pets = () => {
  return (
    <div>
      <h2>My pets:</h2>
      <div className={scss.petCard}></div>
    </div>
  );
};
