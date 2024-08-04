import React, {Link} from 'react-router-dom';
import '../App.css';
import Contact from '../Components/Contact';
import vid from '../media/video.mp4';


function Home() {
  return (
    <div className='Home'>
      <div className='intro'>
        <h1>Viva Tech</h1>
        <p>"A better place to have your projects and daily activities organized and easy to keep track on!"</p>
        <button><Link to="/contact">Get started</Link></button>
      </div>

      <div className='showcase'>
        <div>
          <p>Help your team to increase their perfomance, with better organization</p>
        </div>
        <div>
          <video src={vid} loop="true" autoPlay muted/>
        </div>  
        
      </div>

      <div className='how-to'>
        <h1> How does it work?</h1>
        <h2>Follow These steps</h2>
        <ol>
          <li>Contact Us</li>
          <li>Register your Account</li>
          <li>Login</li>
          <li>Start a Project</li>
          <li>Add Task to your Projects</li>

        </ol>
        <button><Link to="/contact">Get started</Link></button>
      </div>
    </div>
  )
}

export default Home