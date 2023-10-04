import { useState } from 'react';
import styles from './Search.module.css';
import sprite from 'images/icons.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

function Search({ searchParams, setSearchParams, titleSearch }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('searchQuery') || ''
  );

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchTerm) {
      const nextParams =
        searchTerm !== '' ? { searchQuery: searchTerm, page: 1 } : null;
      setSearchParams(nextParams);
    } else setSearchParams({ page: 1 });
  };

  const clearSearch = () => {
    setSearchTerm('');

    searchParams.forEach((value, key) => {
      searchParams.delete(key);
    });

    setSearchParams(searchParams);
  };

  return (
    <div className={styles.positioning}>
      <h3 className={styles.name}>{titleSearch}</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.input}
        />
        <div className={styles.searchIconWrapper}>
          <button type="submit">
            <svg height={24} width={24}>
              <use href={sprite + '#icon-search'} />
            </svg>
          </button>
          {searchTerm && (
            <button className={styles.buttonClose} onClick={clearSearch}>
              <svg height={24} width={24} className={styles.resetIcon}>
                <use href={sprite + '#icon-cross'} />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Search;
