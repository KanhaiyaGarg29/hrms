
import { useState ,useEffect} from "react"
import { getLeaves } from "../services/operations/add";
import { useDispatch } from "react-redux";
import { updateLeaveStatus } from "../services/operations/add";

import "./ViewLeave.css";

function ViewLeave() {
  const [leaveRequest, setLeaveRequest] = useState({ pending: [], accepted: [], rejected: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leavesData = await getLeaves();
        setLeaveRequest({
          pending: leavesData.pending || [],
          accepted: leavesData.accepted || [],
          rejected: leavesData.rejected || [],
        });
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };
    fetchData();
  }, [leaveRequest]);

  const handleUpdateStatus = (id, status) => {
    dispatch(updateLeaveStatus(id, status));
  };

  return (
    <div className="viewleave-table-container">
      <div className="viewleave-section">
        <h2 className="viewleave-heading">Pending Leaves</h2>
        {leaveRequest.pending.length === 0 ? (
          <p className="view-no-leaves">No pending leaves</p>
        ) : (
          <table className="viewleave-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Leave Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequest.pending.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.startDate.substring(0, 10)}</td>
                  <td>{user.endDate.substring(0, 10)}</td>
                  <td>{user.leaveType}</td>
                  <td>{user.status}</td>
                  <td>
                    <button  className="viewleave-button" onClick={() => handleUpdateStatus(user._id, 'accepted')}>Accept</button>
                    <button  className="viewleave-button" onClick={() => handleUpdateStatus(user._id, 'rejected')}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="viewleave-section">
        <h2 className="viewleave-heading">Accepted Leaves</h2>
        {leaveRequest.accepted.length === 0 ? (
          <p className="view-no-leaves">No accepted leaves</p>
        ) : (
          <table className="viewleave-table">
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
              {leaveRequest.accepted.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.startDate.substring(0, 10)}</td>
                  <td>{user.endDate.substring(0, 10)}</td>
                  <td>{user.leaveType}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="viewleave-section">
        <h2 className="viewleave-heading">Rejected Leaves</h2>
        {leaveRequest.rejected.length === 0 ? (
          <p className="view-no-leaves">No rejected leaves</p>
        ) : (
          <table className="viewleave-table">
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
              {leaveRequest.rejected.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.startDate.substring(0, 10)}</td>
                  <td>{user.endDate.substring(0, 10)}</td>
                  <td>{user.leaveType}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewLeave;

// function ViewLeave() {
//     // const [leaveRequest, setLeaveRequest] = useState([]);
//     const [leaveRequest, setLeaveRequest] = useState({ pending:[],accepted: [], rejected: []});
//     const dispatch=useDispatch();
   
    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const leavesData = await getLeaves();
//             setLeaveRequest({ pending:leavesData.pending || [] ,accepted: leavesData.accepted || [], rejected: leavesData.rejected || [] });
          
           
//           } catch (error) {
//             console.error('Error fetching leaves:', error);
//           }
//         };
//         fetchData();
//       }, [leaveRequest]);
    

//   return (
//     <div>
//         {leaveRequest.pending.length === 0 ? (
//         <p>No pending leaves</p>
//     ) : (
//         leaveRequest.pending.map((user) => (
//             <div key={user._id}>
//                 <p>{user.name}</p>
//                 <p>{user.startDate.substring(0, 10)}</p>
//                 <p>{user.endDate.substring(0, 10)}</p>
//                 <p>{user.leaveType}</p>
//                 <p>{user.status}</p>
//                 <button onClick={()=>{dispatch(updateLeaveStatus(user._id,'accepted'));}}>Accept</button>
//                 <button onClick={()=>{dispatch(updateLeaveStatus(user._id,'rejected'));}}>Reject</button>
//             </div>
//         ))
//     )}

//     {leaveRequest.accepted.length === 0 ? (
//         <p>No accepted leaves</p>
//     ) : (
//         leaveRequest.accepted.map((user) => (
//             <div key={user._id}>
//                 <p>{user.name}</p>
//                 <p>{user.startDate.substring(0, 10)}</p>
//                 <p>{user.endDate.substring(0, 10)}</p>
//                 <p>{user.leaveType}</p>
//                 <p>{user.status}</p>
               
//             </div>
//         ))
//     )}

//     {leaveRequest.rejected.length === 0 ? (
//         <p>No rejected leaves</p>
//     ) : (
//         leaveRequest.rejected.map((user) => (
//             <div key={user._id}>
//                 <p>{user.name}</p>
//                 <p>{user.startDate.substring(0, 10)}</p>
//                 <p>{user.endDate.substring(0, 10)}</p>
//                 <p>{user.leaveType}</p>
//                 <p>{user.status}</p>
//             </div>
//         ))
//     )}
// </div>
//   )
// }

// export default ViewLeave