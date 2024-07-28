import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
          <h1>Your Request was sucessfully submitted!</h1>
          <p>We will responde as soons as Possible</p>
          <p> Return to <Link to="/"><span>Home Page</span></Link></p>
        </div>) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Company details</h2>
            <label>Name</label>
            <input 
              type="text"
              name='name'
              onChange={(e) => setCompName(e.target.value)} />

            <label>Email</label>
            <input 
              type="email"
              onChange={(e) => setEmail(e.target.value)} />

            <label>Number of workers</label>
            <input type="number" onChange={(e) => setNumWorkers(e.target.value)}/>

            <label>Phone Number</label>
            <input type="number" onChange={(e) => setPhoneNumber(e.target.value)}/>

            <label>Topic</label>
            <input type="text" onChange={(e) => setTopic(e.target.value)}/>

            <label>Message</label>
            <textarea cols={50} rows={10} onChange={(e) => setMessage(e.target.value)}/>
            <input type="submit" />
        </form>
        )
      }
    </>
  )
}

export default Contact