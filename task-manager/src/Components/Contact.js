import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Contact() {
  //Company details
  const [compName, setCompName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [numWorkers, setNumWorkers] = useState(0);
  
  //Message details
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  //Submiting
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setCompName(compName);
    setEmail(email);
    setPhoneNumber(phoneNumber);
    setNumWorkers(numWorkers);
    setTopic(topic);
    setMessage(message);
    
    setIsSubmitted(true);
    console.log(compName, "\n", topic, "\n", message);

  }
  
 
  return (
    <>
      {
        isSubmitted ? (
        <div className='submitted-contact'>
          <div className='submitted-card'>
          <h1>Your Request was sucessfully submitted!</h1>
          <p>We will responde as soons as possible</p>
          <p> Return to <Link to="/"><span>Home Page</span></Link></p>
          </div>
        </div>) : (
          <div className='contact'>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Company details</h2>
            <label>Name</label>
            <input 
              type="text"
              name='name'
              onChange={(e) => setCompName(e.target.value)} 
              required
              />

            <label>Email</label>
            <input 
              type="email"
              onChange={(e) => setEmail(e.target.value)} 
              required/>

            <div>
              <div>
                <label>Number of workers: </label>
                <input 
                id='numWorkers' 
                type="number" 
                onChange={(e) => setNumWorkers(e.target.value)}
                required/>
              </div>

              <div>
                <label>Phone Number:</label>
                <input 
                type="number" 
                onChange={(e) => setPhoneNumber(e.target.value)}/>
              </div>
            </div>

            <label>Topic</label>
            <input 
            type="text" 
            onChange={(e) => setTopic(e.target.value)}
            required/>

            <label>Message</label>
            <textarea 
            cols={50} rows={10} 
            onChange={(e) => setMessage(e.target.value)}
            required/>
            <input type="submit" />
        </form>
        </div>
        )
      }
    </>
  )
}

export default Contact