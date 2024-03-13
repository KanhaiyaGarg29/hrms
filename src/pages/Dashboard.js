import React from 'react'

import { useParams } from 'react-router';
import { useState ,useEffect} from "react"
import { getEmployees } from '../services/operations/add';
import { useSelector } from 'react-redux';
import { sidebarLinks } from "../data/dashboard-links";
import SidebarLink from "../components/SidebarLink";

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
    const { user } = useSelector((state) => state.profile)
    
    return(
        <>
        <div>Dashboard {id}</div>
        <p>
            welcome 
            
        </p>
        <p>{user.name}</p>
        <p>{user.address}</p>
        <p>{user.category}</p>
        {sidebarLinks.map((link) => {
            if (link.role && user?.role !== link.role) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </>
    )
}

export default Dashboard;