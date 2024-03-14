import React from 'react'
import { useState ,useEffect} from "react"
import { getAdmin } from '../services/operations/add';


function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const employeesData = await getAdmin();
            setEmployees(employeesData);
           
          } catch (error) {
            console.error('Error fetching employees:', error);
          }
        };
        fetchData();
      }, []);

  return (
    <div>EmployeeList
        {employees.map((employee)=>(
        <div>{employee.name}
        <p>{employee.email}</p>
        <p>{employee.address}</p>
        <p>{employee.category}</p>
        <p>{employee.role}</p>
        </div>
        ))}
    </div>
    
  )
}

export default EmployeeList