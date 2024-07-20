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


    return(
        <div className="Project-Management">
            <h1>Project Management</h1>
            <ProjectList
                projects={projects} 
                addProject={addProject} 
                updateProject={updateProject} 
                deleteProject={deleteProject}
            />
        </div>
        

    );
}

