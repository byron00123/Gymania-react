import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import DeleteForm from './DeleteForm';
import WorkoutsList from './WorkoutsList';

const API_URL = 'http://localhost:3000/workouts';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="App">
      <SearchForm />
      <CreateForm />
      <UpdateForm />
      <DeleteForm />
      <WorkoutsList workouts={workouts} />
    </div>
  );
}

export default App;
