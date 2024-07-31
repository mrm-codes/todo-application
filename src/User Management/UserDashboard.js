import React, {useState} from 'react';
import img_sample from '../media/nobody.jpg';
import Profile from './Profile';
import ProjecManager from '../Task Management/ProjectManager';

function UserDashboard({}) {
  const [visElement, setVisElement] = useState('overview');
  const showElement = (id) =>{
    setVisElement(id);
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
                    <li onClick={() => showElement('Notifications')}>Notifications</li>
                    <li onClick={() => showElement('Messages')}>Messages</li>
                    <li onClick={() => showElement('Logout')}>Log out</li>
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
              { visElement === 'notifications' && (<div id='notifications'>Notifications</div>)}
              { visElement === 'messages' && (<div id='messages'>Messages</div>)}
              { visElement === 'logout' && (<div id='logout'>Logout</div>)}
            </div>
        </div>
    </div>
  )
}

export default UserDashboard
