import React from 'react';
import styles from './PetCard.module.css';
import sprite from '../../images/icons.svg';
import Button from '../../UI/Button/Button';

const PetCard = ({ info }) => {
  const { location, category, date, gender, isFav, file } = info;
  const dynamicStyle = {
    backgroundImage: `url(${file})`,
  };
  return (
    <li className={styles.item}>
      <div className={styles.card} style={dynamicStyle}>
        <div className={styles.topParams}>
          <p className={styles.type}>{category}</p>
          <svg className={isFav ? styles.heartIcon : styles.heartIconActive}>
            <use href={sprite + '#heart'} />
          </svg>
        </div>
        <div className={styles.bottomParams}>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + '#location'} />
            </svg>
            <p>
              {location.length > 4 ? location.slice(0, 3) + '...' : location}
            </p>
          </div>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + '#date'} />
            </svg>
            <p>{date.length > 4 ? date.slice(0, 6) : date}</p>
          </div>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + '#gender'} />
            </svg>
            <p>{gender}</p>
          </div>
        </div>
      </div>
      <p className={styles.info}>Сute dog looking for a home</p>
      <div className={styles.btn}>
        <Button text={'Learn more'} />
      </div>
    </li>
  );
};

export default PetCard;
