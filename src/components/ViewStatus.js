
import { useState ,useEffect} from "react"
import { getParticularLeave } from "../services/operations/add";
import { useSelector } from 'react-redux';

function ViewStatus() {
    const [leaves, setleaves] = useState([]);
    const {user}=useSelector((state) => state.profile)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const leavesData = await getParticularLeave(user._id);
            setleaves(leavesData)
           
          } catch (error) {
            console.error('Error fetching leaves:', error);
          }
        };
        fetchData();
      }, []);

  return (
    <div>
  
        {leaves.map((user) => (
            <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.startDate.substring(0, 10)}</p>
                <p>{user.endDate.substring(0, 10)}</p>
                <p>{user.leaveType}</p>
                <p>{user.status}</p>
               
            </div>
        ))
    }
    </div>
  )
}

export default ViewStatus