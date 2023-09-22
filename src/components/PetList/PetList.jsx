import React from "react";
import notices from "../../database/notices.json";
import PetCard from "../PetCard/PetCard";
import styles from "./PetList.module.css";

const PetList = () => {
  return (
    <ul className={styles.list}>
      {notices.map((el) => (
        <PetCard key={el.id} info={el} />
      ))}
    </ul>
  );
};

export default PetList;
