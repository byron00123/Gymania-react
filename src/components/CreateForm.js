import React, { useState } from 'react';

const CreateForm = ({ onAddWorkout }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [equipment, setEquipment] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const workout = { name, image, equipment, duration };
    fetch('http://localhost:3000/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddWorkout(data);
        setName('');
        setImage('');
        setEquipment('');
        setDuration('');
      })
      .catch((error) => console.log(error));
  };

  return (
    <form id="create-form" onSubmit={handleSubmit}>
      <h2>Create Workout</h2>
      <div>
        <label htmlFor="create-name">Name:</label>
        <input
          id="create-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="create-image">Image:</label>
        <input
          id="create-image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="create-equipment">Equipment:</label>
        <input
          id="create-equipment"
          type="text"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="create-duration">Duration:</label>
        <input
          id="create-duration"
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button id="create-btn" type="submit">Create</button>
    </form>
  );
};

export default CreateForm;
