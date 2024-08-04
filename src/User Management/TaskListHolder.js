import React, {useState} from 'react';
import MyTask from './MyTask';
import Task from './Tasks';
import Project from './Project';
import MyProjects from './MyProjects';
import ProjectList from './ProjectList';

export default function TaskListHolder({project}) {
 
  return (
  <div>
    {project.tasks.map(task =>(
                    <MyTask
                        key={task.id}
                        task={task}
                        
                    />
                ))}
  </div>
  );
}

