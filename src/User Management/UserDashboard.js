import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import img_sample from '../media/nobody.jpg';
import Profile from './Profile';
import ProjecManager from '../Task Management/ProjectManager';
import Login from '../Components/Login';

export default function UserDashboard() {
  const [visElement, setVisElement] = useState('overview');
  const showElement = (id) =>{
    setVisElement(id);
  }

  const [loggingout, setLoggingout] =useState(false);

  const handleLogout = (e) =>{
    e.preventDefault();
    setLoggingout(true);
  }
  return (
    <div className='user-dashboard'>
        <div className='header'>
          <div className='user-frame'><img src={img_sample}></img></div>
          <div className='userDetails'>
            <p>Joe Doe</p>
            <h5>Data Analitic</h5>
          </div>
          
        </div>
        <div className='main-body'>
            <div className='sidebar'>
            <h3>Menu</h3>
                <ul>
                    <li onClick={() => showElement('overview')}>Overview</li>
                    <li onClick={() => showElement('myProfile')}>My Profile</li>
                    <li onClick={() => showElement('projects')}>Manage Projects</li>
                    <li onClick={() => showElement('tasks')}>Manage Tasks</li>
                  
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
                <Profile/>
              </div>)}
              { visElement === 'projects' && (<div id='projects'>
                <ProjecManager/>
              </div>)}
              { visElement === 'tasks' && (<div id='tasks'>Tasks</div>)}
              
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


