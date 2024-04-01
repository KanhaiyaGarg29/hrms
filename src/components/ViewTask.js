import React from 'react'
import { useState ,useEffect} from "react"
import { getTask } from '../services/operations/add';

function ViewTask(){
  const [tasks, setTasks] = useState({ new:[],started: [], finished: []});
    // const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const taskData = await getTask();
            setTasks({new:taskData.new || [] ,started:taskData.started|| [] ,finished:taskData.finished|| []});
           
          } catch (error) {
            console.error('Error fetching tasks:', error);
          }
        };
        fetchData();
      }, []);
 
      
    return(
        <div>TaskList
          {tasks.new.length === 0 ? (
        <p>No new tasks</p>
    ) : (
        tasks.new.map((task) => (
          
          <div>
       
            {task.task}
        
          <p>{task.category}</p>
          <p>{task.deadline.substring(0,10)}</p>
          </div>
        ))
    )}

    {tasks.started.length === 0 ? (
        <p>No started tasks</p>
    ) : (
       tasks.started.map((task) => (
        <div>

          {task.task}
        
        <p>{task.category}</p>
        <p>{task.deadline.substring(0,10)}</p>
        </div>
        ))
    )}

    {tasks.finished.length === 0 ? (
        <p>No finished tasks</p>
    ) : (
        tasks.finished.map((task) => (
          <div>

            {task.task}
        
          <p>{task.category}</p>
          <p>{task.deadline.substring(0,10)}</p>
          </div>
        ))
    )}
    </div>
    )
}

export default ViewTask;