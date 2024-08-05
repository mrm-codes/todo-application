import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import img_sample from '../media/nobody.jpg';
import ProjectList from './ProjectList';

import ProfileBg from './ProfileBg';
import ProfileForm from './ProfileForm';


import ProjectListHolder from './ProjectListHolder';
import TaskListHolder from './TaskListHolder';
import ProjectManager from './ProjectManager';
import MyTask from './MyTask';
import Task from './Tasks';
import TaskLists from './MyTask';

import './UserManagement.css';
import './TaskManagement.css';







export default function UserDashboard({completeTasks}) {
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
//--------------------------------------------------------------------------------------------------
//POJECT MANAGER
const [projects, setProjects] = useState([]);
const [count, setCount] = useState(0);
const [countTask, setCountTask] = useState(0);

const [list, setList] = useState([]);
const [allTasks, setAllTasks] = useState([]);
//-------------------------------------------------------------------------------------------------


//Project action
const addProject = (name, id) =>{
    setProjects([...projects, {id: Date.now(), name, tasks: []}]);
    setCount(count+1);
 
};

const updateProject = (id, newName) =>{
    setProjects(projects.map(project => project.id === id ? {...project, name: newName}: project));
   
};

const deleteProject = (id) =>{
    setProjects(projects.filter(project => project.id !== id));  
    setCount(count-1);
};

//Task actions
const addTask = (projectID, taskName) =>{
    setProjects(projects.map(project => project.id === projectID ?
        {...project, tasks: [...project.tasks, {id: Date.now(), name: taskName}]}:project));
        setCountTask(countTask+1);
      
        setList([...list, {id: Date.now(), taskName}])
        if(taskName.trim() !== ''){
          setAllTasks([...allTasks, taskName])
        }

        console.log('list',list);
        console.log('all tasks',allTasks);
    
};

//Completed Tasks



const updateTask = (projectID, taskID, newTask) =>{
    setProjects(projects.map(
        project => project.id === projectID ? 
        {...project, tasks: project.tasks.map(
            task => task.id === taskID ?
            {...task, name: newTask}: task)}: project));
};

const deleteTask = (projectID, taskID) =>{
    setProjects(projects.map(project => project.id === projectID ?
    {...project, tasks: project.tasks.filter(task => task.id !== taskID)}: project));
    setCountTask(countTask-1);
};

// ---------------------------------------------
  //side bar navigation and task navigation
  const [visElement, setVisElement] = useState('overview');
  const showElement = (id) =>{ setVisElement(id);}

  //Task 
  const [visTasks, setVisTasks] = useState('allTasks');
  const showTasks = (id) =>{ setVisTasks(id); }
  
  // logging out buttons
  const [loggingout, setLoggingout] =useState(false);

  const handleLogout = (e) =>{
    e.preventDefault();
    setLoggingout(true);
  }
 
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
                  <p>{count}</p>
                </div>
                <div>
                  <h2>Number of Assigned Tasks</h2>
                  <p>{countTask}</p>
                </div>
                <div>
                  <h2>Number of completed Tasks</h2>
                  <p>0</p>
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
                addTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
              </div>)}

              { visElement === 'projects' && (<div id='projects'>
                <h1>Projects</h1>
                
             <ProjectListHolder
                  projects={projects} />
                
              
              </div>)}

              { visElement === 'tasks' && (<div id='tasks'>
                <div className='tabNavigation'>
                  <button onClick={() => showTasks('allTasks')}>All Tasks</button>
                  <button onClick={() => showTasks('completedTasks')}>Completed Tasks</button>
                  <button onClick={() => showTasks('uncompletedTasks')}>Uncompleted Tasks</button>
                </div> 

                <div className='tabContent'>
                  {visTasks === 'allTasks' && (<div id='allTasks'>
                    <h2>All Tasks</h2>
                    {allTasks.map((tasks, index) => (<p key={index}>{tasks}</p>))}
                  </div>)}

                  {visTasks === 'completedTasks' && (<div id='completedTasks'>
                    <h2>Completed Tasks</h2>
                  </div>)}

                  {visTasks === 'uncompletedTasks' && (<div id='uncompletedTasks'>
                    <h2>Uncompleted Tasks</h2>
                  </div>)}

                </div>
              

                               
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


