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

  const handleSearch = (searchTerm) => {
    fetch(`${API_URL}?name_like=${searchTerm}`)
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error searching workouts:', error));
  };

  const handleUpdate = (updatedWorkout) => {
    fetch(`${API_URL}/${updatedWorkout.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWorkout)
    })
      .then(response => response.json())
      .then(data => {
        const updatedWorkouts = workouts.map(workout => {
          if (workout.id === data.id) {
            return data;
          }
          return workout;
        });
        setWorkouts(updatedWorkouts);
      })
      .catch(error => console.error('Error updating workout:', error));
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedWorkouts = workouts.filter(workout => workout.id !== id);
        setWorkouts(updatedWorkouts);
      })
      .catch(error => console.error('Error deleting workout:', error));
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <CreateForm />
      <UpdateForm onUpdate={handleUpdate} />
      <DeleteForm onDelete={handleDelete} />
      <WorkoutsList workouts={workouts} />
    </div>
  );
}

export default App;
