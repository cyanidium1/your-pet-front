import React from 'react';
import Tag from '../../UI/Tag/Tag';
import styles from './TagsArray.module.css';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import FilteredButton from 'UI/Button/FilteredButton/FilteredButton';
import AddButton from 'UI/Button/AddButton/AddButton';
const tags = ['sell', 'lost/found', 'in good hands'];
const tagsLinks = ['sell', 'lost-found', 'in-good-hands'];

const TagsArray = () => {
  const isLoggedIn = useSelector(selectIsAuth);
  if (isLoggedIn) {
    tags.push('favorite ads', 'my ads');
  }

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map((tag, id) => (
          <Tag key={tag} text={tag} link={tagsLinks[id]} />
        ))}
      </div>
      <div className={styles.rightSideFilter}>
        <FilteredButton />
        <AddButton />
      </div>
    </div>
  );
};

export default TagsArray;