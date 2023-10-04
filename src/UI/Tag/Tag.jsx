import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Tag.module.css';
import clsx from 'clsx';

const Tag = ({ text, link }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';
  const { pathname } = useLocation();
  const categoryPath = pathname.split('/').slice(-1).join('');

  const isActive = link === categoryPath;

  return (
    <Link
      to={'/notices/' + link}
      className={isActive ? styles.tagActive : styles.tag}
      onClick={() => setSearchParams({ searchQuery: link })}
    >
      {text}
    </Link>
  );
};

export default Tag;
