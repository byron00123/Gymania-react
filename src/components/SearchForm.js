import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(name);
    setName('');
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

export default SearchForm;
