import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import img_sample from '../media/nobody.jpg';
import ProjectList from './ProjectList';

import ProfileBg from './ProfileBg';
import ProfileForm from './ProfileForm';
import TaskManager from './TaskManager';
import MyProjects from './MyProjects';
import Project from './Project';
import Test from './ProjectListHolder';
import ProjectListHolder from './ProjectListHolder';




export default function UserDashboard() {
  //User Profile 

  const [user, setUser] = useState({
    image: img_sample,
    fullName: 'Joe Doe',
    email: 'joedoe@example.com',
    contact: '123456789',
    jobPosition: 'Plumber',
    department: 'Maintenance',
    manager: 'R. Bold'
});

const handleUpdateUser = (updatedUser) =>{
  setUser(updatedUser);
}
//----------------------------------------
//POJECT MANAGER
const [projects, setProjects] = useState([]);



//Project action
const addProject = (name, id) =>{
    setProjects([...projects, {id: Date.now(), name, tasks: []}]);
    
   
};

const updateProject = (id, newName) =>{
    setProjects(projects.map(project => project.id === id ? {...project, name: newName}: project));
   
    
};

const deleteProject = (id) =>{
    setProjects(projects.filter(project => project.id !== id));
   
};
/*
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
*/
// ---------------------------------------------
  //side bar navigation
  const [visElement, setVisElement] = useState('overview');
  const showElement = (id) =>{
    setVisElement(id);
  }

  // logging out buttons
  const [loggingout, setLoggingout] =useState(false);

  const handleLogout = (e) =>{
    e.preventDefault();
    setLoggingout(true);
  }
  //--------------------------------------
  return (
    <div className='user-dashboard'>
        <div className='header'>
            <ProfileBg user={user}
            onUpdateUser={handleUpdateUser}
            />
        </div>
        <div className='main-body'>
            <div className='sidebar'>
            <h3>Menu</h3>
                <ul>
                    <li onClick={() => showElement('overview')}>Overview</li>
                    <li onClick={() => showElement('myProfile')}>My Profile</li>
                    <li onClick={() => showElement('project-manager')}>Manage Projects</li>
                    <li onClick={() => showElement('projects')}>Projects</li>
                    <li onClick={() => showElement('tasks')}>Tasks</li>
                  
                    <li onClick={handleLogout}>Log out</li>
                </ul>
            </div>
            <div className='content'>
              
              { visElement === 'overview' && (<div id='overview'>
                <h1>Overview</h1>
                <div className='overview-details'>
                <div>
                  <h2>Number of Projects</h2>
                  <p>02</p>
                </div>
                <div>
                  <h2>Number of Assigned Tasks</h2>
                  <p>04</p>
                </div>
                <div>
                  <h2>Number of completed Tasks</h2>
                  <p>06</p>
                </div>
                <div>
                  <h2>Number of Overdue Tasks</h2>
                  <p>0</p></div>
                </div>
              </div>)}

              { visElement === 'myProfile' && (<div id='myProfile'>
                <ProfileForm 
                 user={user}
                onUpdateUser={handleUpdateUser}
                />

              </div>)}

              { visElement === 'project-manager' && (<div id='project-manager'>
                <ProjectList
                projects={projects} 
                addProject={addProject} 
                updateProject={updateProject} 
                deleteProject={deleteProject}
                //addTask={addTask}
                //updateTask={updateTask}
                //deleteTask={deleteTask}
            />
              </div>)}

              { visElement === 'projects' && (<div id='projects'>
                <h1>Projects</h1>
               
                <ProjectListHolder
                  projects={projects} 
                />
              
              </div>)}

              { visElement === 'tasks' && (<div id='tasks'>
                <h1>Tasks</h1>
             
              </div>)}
              
              
              {!loggingout ? (
                <div></div>
              ) : (
                <div className='logout'>
                  <h2>Are you sure you want to Logout?</h2>
                  <div>
                    <button><Link to="/">Yes</Link></button>
                    <button onClick={(e) => setLoggingout(false)}>No</button>
                  </div>
                  
                </div>
                  )}
             
            </div>
        </div>
        
    </div>
  )
  
};


