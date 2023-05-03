import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSearch === 'function') {
      onSearch(name);
      setName('');
    } else {
      console.error('onSearch is not a function');
    }
  };

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <h3>Search Workouts</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button id="search-btn" type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
