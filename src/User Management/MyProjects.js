import React from 'react';
import { FaStar } from 'react-icons/fa';
import './TaskManagement.css';

function MyProjects({project}) {
 
  return (
    <div>
        <h3><span><FaStar/></span>{project.name}</h3>
    </div>
   ) 
}

export default MyProjects