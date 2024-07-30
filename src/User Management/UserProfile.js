import React, { createElement, useEffect, useState } from 'react';
import { FaUpload, FaSave, FaTrash, FaRecycle } from 'react-icons/fa';


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

    const editProfile= async (e) =>{
      e.preventDefault();
      setIsEditingProfile(true);
    }

    const handleUpload = async (e) =>{
      e.preventDefault();
      const input = document.getElementById("image");
      const fl =input.attributes.getNamedItem(''); 
      //const image = createElement("img");
      //image.src = URL.createObjectURL(fl);
      //const photo = input.append(image);
      
      console.log('uploading..')
      console.log(input)
      //console.log(photo)
    }

    const handleSave = async (e) =>{
      e.preventDefault();
      setSelPhoto(selPhoto);
      console.log('Saving..')
    }

    const handleDelete = async (e) =>{
      e.preventDefault();
      setSelPhoto(null);
      console.log('Deleting..')
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
          <iframe>
            <input 
              type="file"
              accept='.jpg, .jpeg, .png, .svg'
              />
            </iframe>
          <button className='update' onClick={(e) => setIsEditingProfile(true)}><FaRecycle/> Photo</button>
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
        <button onClick={editProfile}>Edit Profile</button>
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
              id='image'
              accept='.jpg, .jpeg, .png, .svg'
              multiple
             />
          </iframe>
          <div className='buttons'>
            <button  className='upload' onClick={handleUpload}><FaUpload/></button>
            <button  className='Save' onClick={handleSave}><FaSave/></button>
            <button  className='delete' onClick={handleDelete}><FaTrash/></button>
          </div>
          

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
      <div >
        <button >Save Profile</button>
      </div>
      
    </form>
    )}
    </>
  ); 
 
};

export default UserProfile;
