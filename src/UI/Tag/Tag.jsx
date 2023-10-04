import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import styles from './Tag.module.css';

const Tag = ({ text, link }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  return (
    <NavLink
      to={'/notices/' + link}
      className={styles.tag}
      activeClassName={styles.active}
      onClick={() => setSearchParams({ searchQuery: link })}
    >
      {text}
    </NavLink>
  );
};

export default Tag;
