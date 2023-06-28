import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByName, getCountries } from '../../Redux/actions';
import style from "./SearchBar.module.css";



const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(filterByName(searchTerm));

    if (searchTerm.length === 0) {
      dispatch(getCountries());
    }
  }

  const handleInput = (event) => {
    if (event.target.value === "") {
      setSearchTerm("");
      dispatch(getCountries());
    }
  }
  return (
    <form className={style.searchBar} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="Buscar país..."
        value={searchTerm}
        onChange={handleSearch}
        onInput={handleInput}
      />
      <button type="submit" className={style.boton}>Buscar</button>
    </form>
  );
};

export default SearchBar;