import React, { useState } from 'react';
import searchIcon from './assets/searchIcon.png';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='searchbar'>
      <input type="text" value={city} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Country"
/>
      <button className='searchButton' onClick={handleSearch}>
        <img src={searchIcon} alt="Search" className="searchIcon" />
      </button>    
    </div>
  );
};

export default SearchBar;