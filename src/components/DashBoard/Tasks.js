import { useState ,useEffect} from "react"
import { getTask } from '../../services/operations/add';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Tasks() {

    const [tasks, setTasks] = useState({ new:[],started: [], finished: [],due:[]});
    // const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const taskData = await getTask();
            setTasks({new:taskData.new || [] ,started:taskData.started|| [] ,finished:taskData.finished|| [],due:taskData.due || []});
           
          } catch (error) {
            console.error('Error fetching tasks:', error);
          }
        };
        fetchData();
      }, []);

      const data = {
        labels: ['New', 'Started', 'Finished', 'Due'],
        datasets: [{
            label: 'Tasks',
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
              ],
          
            data: [tasks.new.length, tasks.started.length, tasks.finished.length, tasks.due.length]
        }]
    };

  return (
    <div style={{ position: 'relative', height: '400px', width: '600px' }}>
    <h2>Tasks</h2>
    <Bar data={data} />
</div>
  )
}

export default Tasks