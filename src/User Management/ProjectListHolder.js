import React, {useState} from "react";
import MyProjects from "./MyProjects";

export default function ProjectListHolder({projects}){
   
    return(
        <div className="Test">
            
            {projects.map(project => (
          <MyProjects
            key={project.id} 
            project={project} 
           
          />
        ))}
        </div>

        

    );
}