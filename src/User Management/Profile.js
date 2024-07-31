import React, {useState} from 'react';
import ProfileForm from './ProfileForm';

function Profile() {

    // user details
    const [user, setUser] = useState({
        image: null,
        fullName: '',
        email: '',
        contact: '',
        jobPosition: '',
        department: '',
        manager: ''
    });

    const handleUpdateUser = (updatedUser) =>{
        setUser(updatedUser);
    }
  return (
    <div>
    <h1>My Profile</h1>
    <ProfileForm 
        user={user}
        onUpdateUser={handleUpdateUser}
    />
    </div>
  );
}

export default Profile