import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Workout from './Workout';
import SearchForm from './SearchForm';

const Search = () => {
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data } = await axios.get('/api/workouts');
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  const handleSearch = (name) => {
    setSearchTerm(name);
  };

  const filteredWorkouts = workouts.filter((workout) => {
    return workout.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {filteredWorkouts.map((workout) => (
        <Workout key={workout._id} workout={workout} />
      ))}
    </>
  );
};

export default Search;
