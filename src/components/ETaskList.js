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
      {tasks.new.length === 0 ? (
        <p>No new tasks</p>
      ) : (
        tasks.new.map((task) => (
          <div key={task._id}>
          
            {task.task}

            <p>{task.category}</p>
            <p>{task.deadline.substring(0, 10)}</p>
            <button
              onClick={() => {
                dispatch(updateTaskStatus(task._id, "in-progress"));
              }}
            >
              Start
            </button>
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
            <p>{task.deadline.substring(0, 10)}</p>
            <button
              onClick={() => {
                dispatch(updateTaskStatus(task._id, "completed"));
              }}
            >
              Finished
            </button>
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
            <p>{task.deadline.substring(0, 10)}</p>
          </div>
        ))
      )}

      
{tasks.due.length === 0 ? (
        <p>No due tasks</p>
      ) : (
        tasks.due.map((task) => (
          <div>         
            {task.task}

            <p>{task.category}</p>
            <p>{task.deadline.substring(0, 10)}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default ETaskList;
