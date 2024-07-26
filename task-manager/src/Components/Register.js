import React, {useState, useRef, useEffect } from 'react';

import {FaTimes, FaCheck, FaInfoCircle, FaUser} from 'react-icons/fa';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/; //User regex
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8-24}$/; //Password Regex
const Register_URL = '/register';

function Register() {
    //User field
    const userRef = useRef();
    const errRef = useRef();
    //User field
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //Password field
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    //Confirm/Match Password
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    //Result Message
    const [errMsg, setErrMsg] =useState('');
    const [success, setSuccess] = useState(false);

    /*Handing Useffect
    useEffect(() =>{
        useRef.current.focus();
    }, [])*/

    useEffect(() =>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() =>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
          
    }

  return (
    <>
    {success ? (
        <div className='success-message'>
            <h1>Success! </h1>

            <p><FaCheck/></p>
            <p>
                <a href='#'>Sign in</a>
            </p>
        </div>
    ):(
    <div className='Register'>
        
        <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
        >{errMsg}</p>
        
        <form className='RegisterForm' onSubmit={handleSubmit}>
            <h2>Register <FaUser/></h2>
            <label htmlFor='username' className='usernameLabel'>Username:
               <span className={validName ? "valid" : "hide"}><FaCheck/></span>
               <span className={validName || !user ? "hide" : "invalid"}><FaTimes/></span>
            </label>
            <input 
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby='userIdNote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p
                id='userIdNote'
                className={userFocus && user && !validName ? "intructions" : "offscreen"}
            ><span><FaInfoCircle/> </span> 
            4 - 24 characters. Must begin with a letter.<br/>
            Letters, Numbers, Underscores, hyphens allowed.
            </p>

            <label htmlFor='password' className='passwordLabel'>Password: 
            <span className={validPwd ? "valid" : "hide"}><FaCheck/></span>
            <span className={!validPwd || pwd ? "hide" : "invalid"}><FaTimes/></span>
            </label>
            <input
                type='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby='passwordNote' 
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />
            <p
                id='passwordNote'
                className={pwdFocus && !validPwd  ? "intructions" : "offscreen"}
            ><span><FaInfoCircle/> </span> 
            8 - 24 characters. Must begin with a letter.<br/>
            Letters, Numbers, Underscores, hyphens allowed. <br/>
            Allowed specia characters: 
            <span aria-label='exclamation mark'>!</span>
            <span aria-label='at symbol'>@</span>
            <span aria-label='hashtag'>#</span>
            <span aria-label='dollar sign'>$</span>
            <span aria-label='percent'>%</span>

            </p>
        
            <label htmlFor='confirmPassword' className='confirmLabel'>Confirm Password: <span className={validMatch && matchPwd ? "valid" : "hide"}><FaCheck/></span>
            <span className={validMatch || !matchPwd ? "hide" : "invalid"}><FaTimes/></span></label>
            
        <input
           type='password'
           id='confirmPassword'
           onChange={(e) => setMatchPwd(e.target.value)}
           required
           aria-invalid={validMatch ? "false" : "true"}
           aria-describedby='confirmNote' 
           onFocus={() => setMatchFocus(true)}
           onBlur={() => setMatchFocus(false)} 
        />

        
            <p
                id='confirmNote'
                className={matchFocus && !validMatch ? "intructions" : "offscreen"}
            ><span><FaInfoCircle/> </span> 
            Must match the first password field

            </p>
            <button
                disabled={!validName || !validMatch ? true : false}
            >Register</button>

        <p>Need Help? <span className='clickHere'>Click Here</span></p>
            
        </form>

    </div>
    )}
    </>
  )
}

export default Register;