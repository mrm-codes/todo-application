import React, {useState} from "react";
import {FaTrash, FaRegCircle, FaEdit, FaCheckCircle, FaTimesCircle} from 'react-icons/fa';

export default function Task ({task, projectID, addTask, updateTask, deleteTask}){
    const[editTask, setEditTask] = useState(task.name);
    const[isEditingTask, setIsEditingTask] = useState(false);
    const [isCompletedTask, setIsCompletedTask] = useState(false);
   //---------------------
   const [completedTaskList, setCompletedTaskList] = useState([]);
   const [completed, setCompleted] = useState([]);
   const [uncompletedTask, setUncompletedTask] = useState([]);
    

    const handleUpdateTask = () =>{
        updateTask(projectID, task.id, editTask);
        setIsEditingTask(false);
    }

    const CompletedTasks = async (e) =>{
        e.preventDefault();
        
        
        console.log('completed list', completed)
      
    }

    const UncompletedTasks= (e) =>{
        e.preventDefault();
        console.log('uncompleted')
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
                            id="completed-btn"           
                            onClick={CompletedTasks}>           <FaCheckCircle/> Task
                        </button>

                        <button
                            id="uncompleted-btn"
                            onClick={UncompletedTasks}>
                           <FaTimesCircle/> Tasks
                        </button>

                        <button 
                            onClick={() => setIsEditingTask(!isEditingTask)}>
                            <FaEdit/> Task
                        </button>

                        <button 
                            onClick={() => deleteTask(projectID, task.id)}>
                            <FaTrash/> Task
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    );
}