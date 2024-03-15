
import { useState ,useEffect} from "react"
import { getLeaves } from "../services/operations/add";
import { useDispatch } from "react-redux";
import { updateLeaveStatus } from "../services/operations/add";

function ViewLeave() {
    // const [leaveRequest, setLeaveRequest] = useState([]);
    const [leaveRequest, setLeaveRequest] = useState({ pending:[],accepted: [], rejected: []});
    const dispatch=useDispatch();
   
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const leavesData = await getLeaves();
            setLeaveRequest({ pending:leavesData.pending || [] ,accepted: leavesData.accepted || [], rejected: leavesData.rejected || [] });
          
           
          } catch (error) {
            console.error('Error fetching leaves:', error);
          }
        };
        fetchData();
      }, []);
    

  return (
    <div>
        {leaveRequest.pending.length === 0 ? (
        <p>No pending leaves</p>
    ) : (
        leaveRequest.pending.map((user) => (
            <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.startDate.substring(0, 10)}</p>
                <p>{user.endDate.substring(0, 10)}</p>
                <p>{user.leaveType}</p>
                <p>{user.status}</p>
                <button onClick={()=>{dispatch(updateLeaveStatus(user._id,'accepted'));}}>Accept</button>
                <button onClick={()=>{dispatch(updateLeaveStatus(user._id,'rejected'));}}>Reject</button>
            </div>
        ))
    )}

    {leaveRequest.accepted.length === 0 ? (
        <p>No accepted leaves</p>
    ) : (
        leaveRequest.accepted.map((user) => (
            <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.startDate.substring(0, 10)}</p>
                <p>{user.endDate.substring(0, 10)}</p>
                <p>{user.leaveType}</p>
                <p>{user.status}</p>
               
            </div>
        ))
    )}

    {leaveRequest.rejected.length === 0 ? (
        <p>No rejected leaves</p>
    ) : (
        leaveRequest.rejected.map((user) => (
            <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.startDate.substring(0, 10)}</p>
                <p>{user.endDate.substring(0, 10)}</p>
                <p>{user.leaveType}</p>
                <p>{user.status}</p>
            </div>
        ))
    )}
</div>
  )
}

export default ViewLeave