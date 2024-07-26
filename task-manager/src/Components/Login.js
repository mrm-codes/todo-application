import React, {useState, useRef, useEffect } from 'react';
import '../User Management/UserManagement.css';
import Register from './Register';
import UserDashboard from '../User Management/UserDashboard';





function Login() {
     //User field
     const userRef = useRef();
     const errRef = useRef();

     //Authentication
     const [user, setUser] = useState('');
     const [pwd, setPwd] = useState('');
     const [errMsg, setErrMsg] =useState('');
     const [success, setSuccess] = useState(false);
     

     
     
    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (!user || !pwd){
            console.log('Invalid Input! \n Verify username or password!')
            setSuccess(false)
        } else {
            console.log('You logged in')
            setSuccess(true)
        }

       

    }

  return (
    <> {success ? (<UserDashboard/>) : (
        <div className='Login'>
         <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
        >{errMsg}</p>

        

        <form onSubmit={handleSubmit} className='signForm'>
        <h2> Sign In</h2>
            <label htmlFor='username'>Username:</label>
            <input 
                type='text'
                id='username'
                value={user}
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required
                
            />

            <label htmlFor='password'>Password:</label>
            <input 
                type='password'
                id='password'
                ref={userRef}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                
            />

            <button>Sign In</button>
            
            <p>Need an Account? <span className='link'><a href= '#'>Sign Up here!</a></span></p>
        </form>
        
        
        
        
    </div>
    )} 
    </>
    
  )
}

export default Login;