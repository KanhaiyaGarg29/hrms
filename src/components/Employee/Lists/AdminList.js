// import React from 'react'
// import { useState ,useEffect} from "react"
// import { getAdmin } from '../../../services/operations/add';


// function EmployeeList() {
//     const [employees, setEmployees] = useState([]);
    
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const employeesData = await getAdmin();
//             setEmployees(employeesData);
           
//           } catch (error) {
//             console.error('Error fetching employees:', error);
//           }
//         };
//         fetchData();
//       }, []);

      

//   return (
//     <div>EmployeeList
//         {employees.map((employee)=>(
//         <div>{employee.name}
//         <p>{employee.email}</p>
//         <p>{employee.address}</p>
//         <p>{employee.category}</p>
//         <p>{employee.role}</p>
//         </div>
//         ))}
//     </div>
    
//   )
// }

// export default EmployeeList

import React from 'react'
import { useState ,useEffect} from "react"
import { getAdmin } from '../../../services/operations/add'
 import empimagee from "../../../assets/download64.jpg"
import './AdminList.css';


function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesData = await getAdmin();
        setEmployees(employeesData);
        setFilteredEmployees(employeesData);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchData();
  }, []);


  const handleSearch = (query) => {
    const filtered = employees.filter(employee =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className='adminlist-list-container'>
    <div className='adminlist-flex'>
      <h2 className='adminlist-heading'>Admin List</h2>
      <div className="admin-search-bar">
        <input
          className='adminlist-search'
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search by name..."
        />
      </div></div>
      <div className="adminlist-cards-container">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="adminlist-card">
            <div className="adminlist-card-header">
              <img src={empimagee} alt={employee.name} className="adminlist-image" />
              <h3 className="adminlist-name">{employee.name}</h3>
            </div>
            <div className="adminlist-details">
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Address:</strong> {employee.address}</p>
             
              <p><strong>Role:</strong> {employee.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;