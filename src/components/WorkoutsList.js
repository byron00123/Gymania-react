import React from 'react';

function WorkoutsList(props) {
  const workouts = Array.isArray(props.workouts) ? props.workouts : [];

  return (
    <div id="workouts-list">
      {workouts.map(workout => (
        <div key={workout.id} className="workout-item">
          <img src={workout.image} alt={workout.name} />
          <h3>{workout.name}</h3>
          <p>Equipment: {workout.equipment}</p>
          <p>Duration: {workout.duration}s</p>
        </div>
      ))}
    </div>
  );
}

export default WorkoutsList;
