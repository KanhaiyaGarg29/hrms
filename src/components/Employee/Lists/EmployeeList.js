
// import React, { useState, useEffect } from 'react';
// import { getEmployees } from '../../../services/operations/add';
// import './EmployeeList.css';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const employeesData = await getEmployees();
//         setEmployees(employeesData);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };
//     fetchData();
//   }, []);

  

//   return (
//     <table className='emp-table'>
//     <div>
//       <h2 className='emp-heading'>Employee List</h2>
//       <table className="employee-table">
//         <thead>
//           <tr>
//           {/* <th>Image</th> */}
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Category</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.address}</td>
//               <td>{employee.category}</td>
//               <td>{employee.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </table>
//   );
// }

// export default EmployeeList;

import React, { useState, useEffect } from 'react';
import { getEmployees } from "../../../services/operations/add"
import empimagee from "../../../assets/download63.jpg"
import './EmployeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesData = await getEmployees();
        setEmployees(employeesData);
        setFilteredEmployees(employeesData);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchData();
  }, []);

  console.log(employees.length);

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
    <div className='employeelist-list-container'>
     <div className='emplist-flex'> <h2 className='employeelist-heading'>Employee List</h2>
      <div className="emplist-search-bar">
        <input
          className='emplist-search'
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search by name..."
        />
      </div></div>
      <div className="employeelist-cards-container">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="employeelist-card">
            <div className="employeelist-card-header">
              <img src={empimagee} alt={employee.name} className="employeelist-image" />
              <h3 className="employeelist-name">{employee.name}</h3>
            </div>
            <div className="employeelist-details">
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Address:</strong> {employee.address}</p>
              <p><strong>Category:</strong> {employee.category}</p>
              <p><strong>Role:</strong> {employee.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;