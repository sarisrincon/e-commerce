import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/iconSearch.png';
import './search-bar.scss';

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const defaultValue = params.get('search') || '';
  const [term, setTerm] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() === '') return;
    navigate(`/items?search=${encodeURIComponent(term)}`);
  };

  return (
    <header className="search-bar">
      <div className="search-bar__container">
        <img src={logo} alt="Logo Mercado Libre" className="search-bar__logo" />
        <form className="search-bar__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-bar__input"
            placeholder="Buscar productos, marcas y más…"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="search-bar__button">
            <img src={searchIcon} alt="Buscar" className="search-bar__icon" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
