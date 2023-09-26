import React from 'react';
import Tag from '../../UI/Tag/Tag';
import styles from './TagsArray.module.css';
import sprite from '../../images/icons.svg';
const tags = ['sell', 'lost/found', 'in good hands'];
const tagsLinks = ['sell', 'lost-found', 'in-good-hands'];
const TagsArray = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map((tag, id) => (
          <Tag key={tag} text={tag} link={tagsLinks[id]} />
        ))}
      </div>
      <div className={styles.filtersButton}>
        <svg className={styles.icon}>
          <use href={sprite + '#setFilters'} />
        </svg>
      </div>
      <button className={styles.addBtn}>
        + <br />
        Add pet
      </button>
    </div>
  );
};

export default TagsArray;
