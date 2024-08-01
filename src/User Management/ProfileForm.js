import React, { useState } from 'react';
import { FaUpload, FaSave, FaTrash, FaRecycle } from 'react-icons/fa';


const ProfileForm = ({user, onUpdateUser}) => {
   
    //form state
    const [formState, setFormState] = useState(user);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormState({...formState, [name]: value});
    };

    const handleImageUpload =(e) =>{
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () =>{
          setFormState({...formState, image: reader.result});
        };
        reader.readAsDataURL(file);
      }
    };

    //submiting form
    const handleSubmit = (e) =>{
      e.preventDefault();
      onUpdateUser(formState);
      setIsEditingProfile(false)
    };

    //Editing form
    const [isEditingProfile, setIsEditingProfile] = useState(false);

    const handleEditProfile = (e) =>{
      e.preventDefault();
      setIsEditingProfile(true);

    }

  return (
    <>
    {
      !isEditingProfile ? (
        <div className="UpdatedProfile">
          <h2>Personal Information</h2>
          <div>
              <label><span>Full Name:</span> {formState.fullName}</label>
              <label><span>Email:</span> {formState.email}</label>
              <label><span>Phone Number: </span>{formState.contact}</label>
              <div>
                <img src={formState.image} alt='profile-image' />
                <button  onClick={handleEditProfile}><FaRecycle/></button>
              </div>
          </div>

          <h2>Job Information</h2>
          <div>
            <label><span>Position: </span>{formState.jobPosition}</label>
            <label><span>Department: </span>{formState.department}</label>
            <label><span>Manager's Name: </span>{formState.manager}</label>
          </div>

          <button id='editProfBtn' onClick={handleEditProfile}>Edit Profile</button>          
        </div>
      ) : (
        <form className='user-profile' onSubmit={handleSubmit}>
      
        <h2>Personal Information</h2>
        <div>
          <div>
          <label>Full Name:</label>
          <input 
            type='text'
            name='fullName'
            value={formState.fullName}
            onChange={handleInputChange}
            required />
            


          <label>Profile image:
            <input 
              type='file'
              id='image'
              accept='.jpg, .jpeg, .png, .svg'
              onChange={handleImageUpload}
              required
             />
          </label>
          </div>

          <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formState.email}
            onChange={handleInputChange}
            required
          
          />

          <label>Phone Number:</label>
          <input
            type='text'
            name='contact'
            value={formState.contact}
            onChange={handleInputChange}
            required
          />
          </div>
          
        </div>
      
  
      <div>
        <h2>Job Information</h2>
        <div>
          <label>Job Position:</label>
          <input 
            type='text'
            name='jobPosition'
            value={formState.jobPosition}
            onChange={handleInputChange} 
            required/>
  
          <label>Department:</label>
          <input 
            type='text'
            name='department'
            value={formState.department}
            onChange={handleInputChange} 
            required/>
  
  
          <label>Managers' Name:</label>
          <input 
            type='text'
            name='manager'
            value={formState.manager}
            onChange={handleInputChange} 
            required          
          />
        </div>
      </div>
      <div >
        <button type='submit'>Save Profile</button>
      </div>
      
    </form>
      )
    }
    </>
  ); 
 
};

export default ProfileForm;
