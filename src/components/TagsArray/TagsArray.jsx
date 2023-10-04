import React from 'react';
import Tag from '../../UI/Tag/Tag';
import styles from './TagsArray.module.css';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import FilteredButton from 'UI/Button/FilteredButton/FilteredButton';

import { tags, tagsAuth, tagsLinks } from 'Utils/constant';
import AddPetBtn from 'components/AddPetBtn/addPetBtn';

const TagsArray = ({ location }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const allButtonsArray = isLoggedIn ? tagsAuth : tags;

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {allButtonsArray.map((tag, id) => (
          <Tag key={tag} text={tag} link={tagsLinks[id]} />
        ))}
      </div>
      <div className={styles.rightSideFilter}>
        <FilteredButton />
        <AddPetBtn location={location} />
      </div>
    </div>
  );
};

export default TagsArray;
