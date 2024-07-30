import React, {Link} from 'react';
import '../App.css';
import Contact from '../Components/Contact';
import '../media/video.mp4';


function Home() {
  return (
    <div className='Home'>
      <div className='intro'>
        <h1>Viva Tech</h1>
        <p>"A better place to have your projects and daily activities organized and easy to keep track on!"</p>
        <button>Get started</button>
      </div>

      <div className='showcase'>
        <iframe>
          <video src='../media/video.mp4' />
        </iframe>
      </div>

      <div className='how-to'>
        <h1> How it works?</h1>
        <h2>Follow These steps</h2>
        <ol>
          <li>Contact Us</li>
          <li>Register your Account</li>
          <li>Login</li>
          <li>Start a Project</li>
          <li>Add Task to your Projects</li>

        </ol>
        <button>Get started</button>
      </div>
    </div>
  )
}

export default Home