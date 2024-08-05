import React, {useState} from "react";
import Task from "./Tasks";
import {FaTrash, FaPlusCircle, FaEdit} from 'react-icons/fa';
import MyTask from "./MyTask";

export default function Project({project, updateProject, deleteProject, addTask, updateTask, deleteTask}){

    const [newTask, setNewTask] = useState('');
    const [editProject, setEditProject] = useState(project.name);
    const [isEditing, setIsEditing] = useState(false);
    

    //Adding Task in the project -btn
    const handleAddTask = () =>{
        if(newTask.trim()){
            addTask(project.id, newTask);
            setNewTask('');
        }
        console.log('NewTask', newTask)

        
    }
    // btn- function
    const handleUpdateProject = () =>{
        updateProject(project.id, editProject);
        setIsEditing(false);
    }
    return(
        <div className="Project">
            {isEditing ? (
                <div>
                    <input 
                        type="text"
                        value={editProject}
                        onChange={(e) => setEditProject(e.target.value)}
                    />
                    <button onClick={handleUpdateProject}><FaEdit/> Project</button>
                </div>
                ) : (
                    <div className="project-name">
                        <h2>{project.name}</h2>
                        <div className="btn">
                            <button onClick={() => setIsEditing(!isEditing)}><FaEdit/>Edit</button>
                            <button onClick={() => deleteProject(project.id)}><FaTrash/>Delete</button>
                        </div>
                    </div>
                )
            }
            
            
            <div>
                <input 
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add task"
                />
                <button onClick={handleAddTask}><FaPlusCircle/> Task</button>
            </div>
            <div>
                {project.tasks.map(task =>(
                    <Task
                        key={task.id}
                        task={task}
                        projectID={project.id}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
                
            </div>
        </div>
    );
}