import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSubmit }) => {
  const inputRef = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    query && onSubmit(query);
  };

  const onClick = (event) => {
    handelSubmit(event);
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handelSubmit(event);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.log}>
        <img src="/images/logo.png" alt="logo" />
        <h1>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="입력"
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button
        type="submit"
        className={styles.button}
        name="button"
        onClick={onClick}
      >
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
