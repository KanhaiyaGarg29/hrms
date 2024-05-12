import React, { useState, useEffect } from 'react';
import { getTask } from '../services/operations/add';
import "./ViewTask.css"

function ViewTask() {
    const [tasks, setTasks] = useState({ new: [], started: [], finished: [], due: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const taskData = await getTask();
                setTasks({
                    new: taskData.new || [],
                    started: taskData.started || [],
                    finished: taskData.finished || [],
                    due: taskData.due || []
                });
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='viewtask-container'>
        <h2>TaskList</h2>
        <div className = 'task-lists'>
        

            {tasks.new.length === 0 ? (
                <p>No new tasks</p>
            ) : 
            (
            <table className="task-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
            {tasks.new.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline.substring(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
            )}</div>
            
            <h2>Started Tasks</h2>
            <div className = 'task-lists'>            
            {tasks.started.length === 0 ? (
                <p>No started tasks</p>
            ) : (
                <table className="task-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
            {tasks.started.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline.substring(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
            )}
</div>  
            <h2>Finished Tasks</h2>
            <div className = 'task-lists'>
            
            {tasks.finished.length === 0 ? (
                <p>No finished tasks</p>
            ) : (
                <table className="task-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
            {tasks.finished.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline.substring(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
            )}</div>

            <h2>Due Tasks</h2>
            <div className = 'task-lists'>
            
            {tasks.due.length === 0 ? (
                <p>No due tasks</p>
            ) : (
                <table className="task-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
            {tasks.due.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline.substring(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
            )}</div>
            
        </div>
    );
}

export default ViewTask;
