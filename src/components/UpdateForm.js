import React, { useState } from 'react';

const UpdateForm = ({ onUpdate }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [equipment, setEquipment] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ id, name, image, equipment, duration });
    setId('');
    setName('');
    setImage('');
    setEquipment('');
    setDuration('');
  };

  return (
    <form id="update-form" onSubmit={handleSubmit}>
      <h3>Update Workout</h3>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="equipment">Equipment:</label>
        <input type="text" id="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </div>
      <button id="update-btn" type="submit">Update Workout</button>
    </form>
  );
};

export default UpdateForm;
