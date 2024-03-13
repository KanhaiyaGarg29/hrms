import React from 'react'
import EmployeeList from './EmployeeList';
import { useParams } from 'react-router';
import { useState ,useEffect} from "react"
import { getEmployees } from '../services/operations/add';

function Dashboard(){
    const { id } = useParams();
    const [employees, setEmployees] = useState([]);
    const [emp,setEmp]=useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const employeesData = await getEmployees();
            let emp = employeesData.find((user1)=> user1._id === id);
            if(emp){
            setEmp(emp)
            }
            setEmployees(employeesData);
          } catch (error) {
            console.error('Error fetching employees:', error);
          }
        };
        fetchData();
      }, []);
    // console.log(employees);

    // let emp = employees.find((user1)=> user1._id === id);
    // console.log(emp.name);

    return(
        <>
        <div>Dashboard {id}</div>
        {/* <p>
            welcome 
            
        </p>
        <p>{emp.name}</p>
        <p>{emp.address}</p>
        <p>{emp.category}</p> */}
        {/* <EmployeeList/> */}
        </>
    )
}

export default Dashboard;