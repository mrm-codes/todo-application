import React, {useState} from 'react';
import ProfileForm from './ProfileForm';
import UserDashboard from './UserDashboard';

function ProfileBg({user, onUpdateUser}) {
  const [bgState, setBgState] = useState();

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setBgState({...bgState, [name]: value});
  }

  const handleImageUpload =(e) =>{
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>{
        setBgState({...bgState, image: reader.result});
       
      };
      reader.readAsDataURL(file);
    }
  };


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

  