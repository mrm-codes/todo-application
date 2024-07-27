import React, { useEffect, useState } from 'react';


const UserProfile = () => {
    //actions
    const [isEditingProfile, setIsEditingProfile] = useState(false);


    //User details
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [userId, setUserId] = useState('');

    //Photo
    const [selPhoto, setSelPhoto] = useState(null);


    //job details
    const [jobPos, setJobPos] = useState('');
    const [dep, setDep] = useState('');
    const [managerName, setManagerName] = useState('');


    //buttons
    const handleSubmit = async (e) =>{
      e.preventDefault();
      setFName(fName);
      setLName(lName);
      setJobPos(jobPos);
      setDep(dep);
      setManagerName(managerName);
      setSelPhoto(selPhoto)
      setIsEditingProfile(false);

    }

    const updatePhoto = (e) =>{
      e. preventDefault();
      
    }
      


  return (
    <>
    {!isEditingProfile ? (
      <form className='Uprofile' onSubmit={handleSubmit}>
      <div>
        
        
        <h2>Personal Information</h2>
        <div>
          <label><span>Full Name:</span> {fName} {lName}</label>
    
          <div>
          <iframe>{selPhoto}</iframe>
          <button className='update' onClick={(e) => setIsEditingProfile(true)}>Change Photo</button>
        </div>
        </div>
      </div>
  
      <div>
        <h2>Job Information</h2>
        <div>
          <label><span>Job Position:</span> {jobPos}</label>
          <label><span>Department:</span> {dep}</label>
          <label><span>Managers' Name:</span> {managerName}</label>
        </div>
      </div>
      <div className='buttons'>
        <button onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
      </div>
      
    </form>
    ) :(
      <form className='user-profile' onSubmit={handleSubmit}>
      <div>
        
        
        <h2>Personal Information</h2>
        <div>
          <label>First Name:</label>
          <input 
            type='text'
            onChange={(e) => setFName(e.target.value)} />
          <label>Last Name:</label>
          <input 
            type='text'
            onChange={(e) => setLName(e.target.value)} />
          
          <div>
          <iframe>
            <input 
              type='file'
              accept='image/*'
              
             />
          </iframe>
          <button  className='update'>Update Photo</button>
        </div>
        </div>
      </div>
  
      <div>
        <h2>Job Information</h2>
        <div>
          <label>Job Position:</label>
          <input 
            type='text'
            onChange={(e) => setJobPos(e.target.value)} />
  
          <label>Department:</label>
          <input 
            type='text'
            onChange={(e) => setDep(e.target.value)} />
  
  
          <label>Managers' Name:</label>
          <input 
            type='text'
            onChange={(e) => setManagerName(e.target.value)}           
          />
        </div>
      </div>
      <div className='buttons'>
        <button >Save Profile</button>
        <button onClick={(e) => setIsEditingProfile(true)}>Edit Profile</button>
      </div>
      
    </form>
    )}
    </>
  ); 
 
};

export default UserProfile;
