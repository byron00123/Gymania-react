import React, { useState } from 'react';

const DeleteForm = ({ onDelete }) => {
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onDelete(id);
    setId('');
  };

  return (
    <form id="delete-form" onSubmit={handleSubmit}>
      <h3>Delete Workout</h3>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
      </div>
      <button id="delete-btn" type="submit">Delete Workout</button>
    </form>
  );
};

export default DeleteForm;
