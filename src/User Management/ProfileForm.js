import React from 'react'

function ProfileForm() {
  return (
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
        <iframe><img src='/nobody,jpg'></img></iframe>
        <button className='update'>Update Photo</button>
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
      <button>Edit Profile</button>
    </div>
    
  </form>
  )
}

export default ProfileForm