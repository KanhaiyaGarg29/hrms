
import { useState ,useEffect} from "react"
import { getLeaves } from "../services/operations/add";

function ViewLeave() {
    const [leaveRequest, setLeaveRequest] = useState([]);
    
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const leavesData = await getLeaves();
            setLeaveRequest(leavesData)
          
           
          } catch (error) {
            console.error('Error fetching leaves:', error);
          }
        };
        fetchData();
      }, []);

     

  return (
    <div>
      {leaveRequest.map((user)=>(
        <div>{user.name}
        <p>{user.startDate.substring(0,10)}</p>
        <p>{user.endDate.substring(0,10)}</p>
        <p>{user.leaveType}</p>
        <button>Accept</button>
        <button>Reject</button>
        </div>
        ))}
    </div>
  )
}

export default ViewLeave