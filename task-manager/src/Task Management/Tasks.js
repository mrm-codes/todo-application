import React, {useState} from "react";
import {FaTrash, FaPlusCircle, FaEdit} from 'react-icons/fa';

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
                    <button onClick={handleUpdateTask}> <FaEdit/> Task</button>
                </div>
            ):(
                <div className="task-list">
                <li>{task.name}</li>
                    <div className="btn">
                        <button onClick={() => setIsEditingTask(!isEditingTask)}><FaEdit/> Task</button>
                        <button onClick={() => deleteTask(projectID, task.id)}><FaTrash/> Task</button>
                    </div>
                </div>
            )}
            
        </div>
    );
}