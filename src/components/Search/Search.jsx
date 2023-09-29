import { useState } from 'react';
import styles from './Search.module.css';
import sprite from 'images/icons.svg';

function Search({ cb }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    cb(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className={styles.positioning}>
      <h3 className={styles.name}>Find your favorite pet</h3>
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
          {searchTerm.length > 0 && (
            <button type="submit" className={styles.buttonClose}>
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
