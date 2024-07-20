import React, {useState} from "react";

export default function Task ({task, projectID, updateTask, deleteTask}){
    const[editTask, setEditTask] = useState(task.name);
    const[isEditingTask, setIsEditingTask] = useState(false);

    const handleUpdateTask = () =>{
        updateTask(projectID, task.id, editTask);
        setIsEditingTask(false);
    }
    
    return (
        <div className="Task">
            {isEditingTask ? (
                <div>
                    <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                    />
                    <button onClick={handleUpdateTask}>Update Task</button>
                </div>
            ):(
                <li>{task.name}</li>
            )}
            <button onClick={() => setIsEditingTask(!isEditingTask)}>Edit Task</button>
            <button onClick={() => deleteTask(projectID, task.id)}>Delete Task</button>
        </div>
    );
}