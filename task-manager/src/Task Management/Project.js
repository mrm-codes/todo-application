import React, {useState} from "react";
import Task from "./Tasks";

export default function Project({project, updateProject, deleteProject}){
    const [editProject, setEditProject] = useState(project.name);
    const [isEditing, setIsEditing] = useState(false);

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
        </div>
    );
}