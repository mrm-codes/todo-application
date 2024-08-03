import React from 'react';


function ProfileBg({user}) {

  return (
    <div>
      <div className='user-frame'><img src={user.image}/></div>
              <div className='userDetails'>
                <p>{user.fullName}</p>
                <p><span>Position: </span>{user.jobPosition}</p>
                <p><span>Manager's name: </span>{user.manager}</p>
                
              </div> 
    </div>
  )
}

export default ProfileBg;

  