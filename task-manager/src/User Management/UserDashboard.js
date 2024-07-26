import React, {useState} from 'react'

function UserDashboard() {
  const [visElement, setVisElement] = useState('overview');
  const showElement = (id) =>{
    setVisElement(id);
  }
  return (
    <div className='user-dashboard'>
        <div className='header'>Header</div>
        <div className='main-body'>
            <div className='sidebar'>
                <ul>
                    <li onClick={() => showElement('overview')}>Overview</li>
                    <li onClick={() => showElement('myProfile')}>My Profile</li>
                    <li onClick={() => showElement('projects')}>Projects</li>
                    <li onClick={() => showElement('tasks')}>Tasks</li>
                    <li onClick={() => showElement('Notifications')}>Notifications</li>
                    <li onClick={() => showElement('Messages')}>Messages</li>
                    <li onClick={() => showElement('Logout')}>Log out</li>
                </ul>
            </div>
            <div className='content'>
              { visElement === 'overview' && (<div id='overview'>Overview</div>)}
              { visElement === 'myProfile' && (<div id='myProfile'>My Profile</div>)}
              { visElement === 'projects' && (<div id='projects'>Projects</div>)}
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
