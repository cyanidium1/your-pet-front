import React, { useState } from "react";
import styles from "../NewsSearch/NewsSearch.module.css";
import NewsList from "../NewsList/NewsList";

function NewsSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };
 
  
  

  return (
    <><div className={styles.positioning}>
    <h3 className={styles.name}>News</h3>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button type="submit">
      <span className={styles.icon}></span>
      </button>
    </form>
  </div>
 <NewsList/>
    </>
    
  );
}

export default NewsSearch;
