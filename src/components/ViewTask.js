import React from 'react'
import { useState ,useEffect} from "react"
import { getTask } from '../services/operations/add';

function ViewTask(){

    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const taskData = await getTask();
            setTasks(taskData);
           
          } catch (error) {
            console.error('Error fetching employees:', error);
          }
        };
        fetchData();
      }, []);
    return(
        <div>TaskList
        {tasks.map((task)=>(
        <div>{task.task}
        
        <p>{task.category}</p>
        <p>{task.deadline}</p>
        </div>
        ))}
    </div>
    )
}

export default ViewTask;