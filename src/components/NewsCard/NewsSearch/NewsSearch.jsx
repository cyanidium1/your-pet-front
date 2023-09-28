import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchAllNews, fetchFilteredNews } from 'redux/news/newsOperation';
import NewsList from '../NewsList/NewsList';

import styles from '../NewsSearch/NewsSearch.module.css';
import sprite from '../../../images/icons.svg'

  const NewsSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [currentFilterPage, setCurrentFilterPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!submitted) {
      dispatch(fetchAllNews(currentNewsPage));
      setCurrentFilterPage(1);
    }
  }, [currentNewsPage, submitted, dispatch]);

  const handleSearch = e => {
    e.preventDefault();
    dispatch(fetchFilteredNews(keyword));
    if (keyword.trim() === '') {
      setKeyword('');
    } else {
      setSubmitted(true);
    }
  };

  const handleChange = event => {
    const value = event.target.value;
    setKeyword(value);
    setCurrentFilterPage(1);
  };

  const handleClear = () => {
    setKeyword('');
    setSubmitted(false);
    setCurrentNewsPage(1);
    setCurrentFilterPage(1);
  };

  return (
    <>
      <div className={styles.positioning}>
        <h3 className={styles.name}>News</h3>
        <form onSubmit={handleSearch} className={styles.form}>
          <input
            value={keyword}
            onChange={handleChange}
            placeholder={'Search'}
            className={styles.input}
          />
          <button type="submit">
            <span className={styles.icon}></span>
          </button >
          {keyword.length>0 && (<button onClick={handleClear} className={styles.buttonClose}> <svg height={24} width={24}><use href={sprite+'#icon-cross'}/>
            </svg> 
            </button>)}
        </form>
      </div>
      <NewsList/>
    </>
  );
};

export default NewsSearch;
