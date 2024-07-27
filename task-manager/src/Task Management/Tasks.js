import React, {useState} from "react";
import {FaTrash, FaRegCircle, FaEdit} from 'react-icons/fa';

export default function Task ({task, projectID, updateTask, deleteTask}){
    const[editTask, setEditTask] = useState(task.name);
    const[isEditingTask, setIsEditingTask] = useState(false);
    const [isCompletedTask, setIsCompletedTask] = useState(false);

    const handleUpdateTask = () =>{
        updateTask(projectID, task.id, editTask);
        setIsEditingTask(false);
    }

    const completeTask = async (e) =>{
        e.preventDefault();
        setIsCompletedTask(true);
        if(isCompletedTask){
            setIsCompletedTask(false);
        }
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
                <li className={isCompletedTask ? "completed": "not-completed"}><FaRegCircle/> {task.name}</li>
                    <div className="btn">
                        <button 
                        id={!isCompletedTask ? "completed-btn" : "not-completed-btn"}
                        
                        onClick={completeTask}>{!isCompletedTask ?("Complete Task") : ("Uncomplete Task")}</button>
                        <button onClick={() => setIsEditingTask(!isEditingTask)}><FaEdit/> Task</button>
                        <button onClick={() => deleteTask(projectID, task.id)}><FaTrash/> Task</button>
                    </div>
                </div>
            )}
            
        </div>
    );
}