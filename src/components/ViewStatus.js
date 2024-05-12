
import { useState ,useEffect} from "react"
import { getParticularLeave } from "../services/operations/add";
import { useSelector } from 'react-redux';

import './ViewStatus.css';

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
        <div className="viewstatus-container">
          <h2 className="viewstatus-heading">Leave Status</h2>
          {leaves.length > 0 ? (
      <table className="viewstatus-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Leave Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave._id}>
              <td>{leave.name}</td>
              <td>{leave.startDate.substring(0, 10)}</td>
              <td>{leave.endDate.substring(0, 10)}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No leaves to display</p>
    )}
        </div>
      );
    }

export default ViewStatus

// function ViewStatus() {
//     const [leaves, setleaves] = useState([]);
//     const {user}=useSelector((state) => state.profile)
    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const leavesData = await getParticularLeave(user._id);
//             setleaves(leavesData)
           
//           } catch (error) {
//             console.error('Error fetching leaves:', error);
//           }
//         };
//         fetchData();
//       }, []);

//   return (
//     <div>
  
//         {leaves.map((user) => (
//             <div key={user._id}>
//                 <p>{user.name}</p>
//                 <p>{user.startDate.substring(0, 10)}</p>
//                 <p>{user.endDate.substring(0, 10)}</p>
//                 <p>{user.leaveType}</p>
//                 <p>{user.status}</p>
               
//             </div>
//         ))
//     }
//     </div>
//   )
// }

// export default ViewStatus