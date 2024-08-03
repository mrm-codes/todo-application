import React from 'react';

function TaskManager({task}) {
  return (
    <div>
        <p>{task.name}</p>
    </div>
  )
}

export default TaskManager