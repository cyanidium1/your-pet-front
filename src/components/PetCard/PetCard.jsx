import React from "react";
import styles from "./PetCard.module.css";
import sprite from "../../images/icons.svg";
import Button from "../../UI/Button/Button";

const PetCard = ({ info }) => {
  const { location, type, mileage, gender, isFav } = info;
  return (
    <li className={styles.item}>
      <div className={styles.card}>
        <div className={styles.topParams}>
          <p className={styles.type}>{type}</p>
          <svg className={isFav ? styles.heartIcon : styles.heartIconActive}>
            <use href={sprite + "#heart"} />
          </svg>
        </div>
        <div className={styles.bottomParams}>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + "#location"} />
            </svg>
            <p>
              {location.length > 4 ? location.slice(0, 3) + "..." : location}
            </p>
          </div>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + "#mileage"} />
            </svg>
            <p>{mileage.length > 4 ? mileage.slice(0, 6) : mileage}</p>
          </div>
          <div className={styles.parameter}>
            <svg className={styles.icon}>
              <use href={sprite + "#gender"} />
            </svg>
            <p>{gender}</p>
          </div>
        </div>
      </div>
      <p className={styles.info}>Сute dog looking for a home</p>
      <div className={styles.btn}>
        <Button text={"Learn more"} />
      </div>
    </li>
  );
};

export default PetCard;
