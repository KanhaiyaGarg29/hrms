import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getParticulartasks } from "../services/operations/add";
import { updateTaskStatus } from "../services/operations/add";
import "./ETaskList.css"

function ETaskList() {
  const [tasks, setTasks] = useState({ new: [], started: [], finished: [] ,due:[]});
  // const [tasks, setTasks] = useState([]);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getParticulartasks(user.category);
        // setTasks(tasksData)
        setTasks({
          new: tasksData.new || [],
          started: tasksData.started || [],
          finished: tasksData.completed || [],
          due:tasksData.due || []
        });
        
        tasksData.new.forEach(task=>{
          if(new Date(task.deadline) < new Date()){
            dispatch(updateTaskStatus(task._id, "due"));
          }
        })

        tasksData.started.forEach(task=>{
          if(new Date(task.deadline) < new Date()){
            dispatch(updateTaskStatus(task._id, "due"));
          }
        })
  

      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, [tasks]);

   


  return (
    <div className="etask-container">
    <h2>TaskList</h2>
    <div>{tasks.new.length === 0 ? (
        <p className='etaskp'>No new tasks</p>
      ) : (
        <table className="task-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>End Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {tasks.new.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline.substring(0, 10)}</td>
                  <td><button
              onClick={() => {
                dispatch(updateTaskStatus(task._id, "in-progress"));
              }}
            >
              Start
            </button></td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
      </div>
      
      <h2>Started Tasks</h2>
      <div>{tasks.started.length === 0 ? (
        <p className='etaskp'>No started tasks</p>
      ) : (
        <table className="task-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>End Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {tasks.started.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{task.category}</td>
                  <td>{task.deadline.substring(0, 10)}</td>
                  <td><button
              onClick={() => {
                dispatch(updateTaskStatus(task._id, "completed"));
              }}
            >
              Finished
            </button></td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
      </div>
      
      <h2>Finished Tasks</h2>
      <div>{tasks.finished.length === 0 ? (
        <p className='etaskp'>No finished tasks</p>
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
      )}
</div>
      
     <h2>Due Tasks</h2>
     <div>{tasks.due.length === 0 ? (
        <p className='etaskp'>No due tasks</p>
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
      )}
</div> 

    </div>
  );
}

export default ETaskList;
