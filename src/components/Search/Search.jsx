import React, { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
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
        <span className={styles.icon}></span>
      </form>
    </div>
  );
}

export default Search;
