import React from "react";
import MyProjects from "./MyProjects";

export default function ProjectListHolder({projects}){
   
    return(
        <div>
            
            {projects.map(project => (
          <MyProjects
            key={project.id} 
            project={project} 
           
          />
        ))}
        </div>

    );
}