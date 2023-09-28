import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Tag.module.css';

const Tag = ({ text, link }) => {
  return (
    <NavLink to={'/notices/' + link} className={styles.tag}>
      {text}
    </NavLink>
  );
};

export default Tag;
