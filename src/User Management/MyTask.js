import React, { useState } from 'react';


const MyTask = ({projects}) =>{
  
  const list = projects.map(project => 
  project.tasks.map(task => task.name));
  
  console.log(list);
  return (
    <div>
      {list.values((item, index) =>(
        <p key={index}>{item}</p>
      ))}
    </div>
  );

}

export default MyTask