import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ text }) => {
  return <p className={styles.tag}>{text}</p>;
};

export default Tag;
