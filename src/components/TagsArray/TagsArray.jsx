import React, { useEffect, useState } from 'react';
import Tag from '../../UI/Tag/Tag';
import styles from './TagsArray.module.css';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import FilteredButton from 'UI/Button/FilteredButton/FilteredButton';

import { ageComponent, tags, tagsAuth, tagsLinks } from 'Utils/constant';
import AddPetBtn from 'components/AddPetBtn/addPetBtn';
import FilteredButtonsComponent from 'components/FilteredButtonsComponent/FilteredButtonsComponent';
import { selectFilterOptions } from 'redux/notices/noticeSelectors';

const TagsArray = ({ location }) => {
  const filterOption = useSelector(selectFilterOptions);
  const [allFilterComponent, setAllFilterComponent] = useState([]);

  const isLoggedIn = useSelector(selectIsAuth);
  const allButtonsArray = isLoggedIn ? tagsAuth : tags;

  useEffect(() => {
    setAllFilterComponent([
      ...filterOption.sex,
      ...filterOption.age.map(item => ageComponent[+item - 1]),
    ]);
  }, [filterOption]);

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {allButtonsArray.map((tag, id) => (
          <Tag key={tag} text={tag} link={tagsLinks[id]} />
        ))}
      </div>
      <div className={styles.rightSideFilter}>
        <div className={styles.filterBtnWrapper}>
          <div className={styles.filtenWrapperBox}>
            <FilteredButton />
          </div>
          <AddPetBtn location={location} />
        </div>
        <div>
          <ul className={styles.filterComponentList}>
            {allFilterComponent.map(info => (
              <FilteredButtonsComponent text={info} key={info} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TagsArray;
