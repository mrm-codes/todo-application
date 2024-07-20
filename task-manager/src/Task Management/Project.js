import React, {useState} from "react";
import Task from "./Tasks";

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
                    <button onClick={handleUpdateProject}>Update Project</button>
                </div>
                ) : (
                    <h3>{project.name}</h3>
                )
            }
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
            <div>
                <input 
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add task"
                />
                <button onClick={handleAddTask}>Add Task</button>
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