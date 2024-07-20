import React, {useState} from "react";
import Project from "./Project";

export default function ProjectList({projects, addProject, updateProject, deleteProject, addTask, updateTask, deleteTask}){
    const [newProject, setNewProject] = useState(''); //Project list
  
    //Add New project
    const handleAddProject = () =>{
        
        if (newProject.trim()) {
            addProject(newProject);
            setNewProject('');
          }
    }
    return(
        <div className="Project-List">
            <h2>Projects</h2>
            <input
                type="text"
                value={newProject}
                onChange={(e) =>{setNewProject(e.target.value)}}
                placeholder="New project name"
            />
            <button onClick={handleAddProject}>Add project</button>
            <div>
            {projects.map(project => (
          <Project 
            key={project.id} 
            project={project} 
            updateProject={updateProject} 
            deleteProject={deleteProject}
            addTask={addTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
           
          />
        ))}
            </div>

        </div>

    );
}