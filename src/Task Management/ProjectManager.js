import React, { useState } from "react";
import ProjectList from "./ProjectList";
import './TaskManagement.css'

export default function ProjectManager(){
    const [projects, setProjects] = useState([]);


    //Project action
    const addProject = (name) =>{
        setProjects([...projects, {id: Date.now(), name, tasks: []}]);
    };

    const updateProject = (id, newName) =>{
        setProjects(projects.map(project => project.id === id ? {...project, name: newName}: project));
    };

    const deleteProject = (id) =>{
        setProjects(projects.filter(project => project.id !== id));
    };

    //Task actions
    const addTask = (projectID, taskName) =>{
        setProjects(projects.map(project => project.id === projectID ?
            {...project, tasks: [...project.tasks, {id: Date.now(), name: taskName}]}:project));
    };

    const updateTask = (projectID, taskID, newTask) =>{
        setProjects(projects.map(
            project => project.id === projectID ? 
            {...project, tasks: project.tasks.map(
                task => task.id === taskID ?
                {...task, name: newTask}: task)}: project));
    };

    const deleteTask = (projectID, taskID) =>{
        setProjects(projects.map(project => project.id === projectID ?
        {...project, tasks: project.tasks.filter(task => task.id !== taskID)}: project))
    };
    
    
   
    return(
        <div className="Project-Management">
            
            <ProjectList
                projects={projects} 
                addProject={addProject} 
                updateProject={updateProject} 
                deleteProject={deleteProject}
                addTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
        </div>
        

    );
}

