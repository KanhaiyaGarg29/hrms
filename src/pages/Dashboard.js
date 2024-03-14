import React from 'react'

// import { useParams } from 'react-router';
// import { useState ,useEffect} from "react"
// import { getEmployees } from '../services/operations/add';
import Sidebar from '../components/Sidebar';
import { Outlet } from "react-router-dom"

function Dashboard(){
   
    // const { id } = useParams();
    // const [employees, setEmployees] = useState([]);
    // const [emp,setEmp]=useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const employeesData = await getEmployees();
    //         let emp = employeesData.find((user1)=> user1._id === id);
    //         if(emp){
    //         setEmp(emp)
    //         }
    //         setEmployees(employeesData);
    //       } catch (error) {
    //         console.error('Error fetching employees:', error);
    //       }
    //     };
    //     fetchData();
    //   }, []);
    
    
    return(
      <div>
      <Sidebar />
      <div >
        <div >
          <Outlet />
        </div>
      </div>
    </div>
    )
}

export default Dashboard;