import { useSelector } from 'react-redux';
import { useState ,useEffect} from "react"
import { getParticulartasks } from '../services/operations/add';

function ETaskList(){
    const [tasks, setTasks] = useState([]);
    const {user}=useSelector((state) => state.profile)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const tasksData = await getParticulartasks(user.category);
            setTasks(tasksData)
           
          } catch (error) {
            console.error('Error fetching tasks:', error);
          }
        };
        fetchData();
      }, []);

      console.log(tasks);
    return(
        <>
          {tasks.map((task) => (
            <div key={task._id}>
                <p>{task.task}</p>
                <p> {task.deadline}</p>
                {/* <p>{user.startDate.substring(0, 10)}</p>
                <p>{user.endDate.substring(0, 10)}</p>
                <p>{user.leaveType}</p>
                <p>{user.status}</p> */}
               
            </div>
        ))
    }
        </>
    )
}

export default ETaskList;