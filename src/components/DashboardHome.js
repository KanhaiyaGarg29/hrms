import React from 'react';
import Category from './DashBoard/Category';
import Employee from './DashBoard/Employee';
import Tasks from './DashBoard/Tasks';
import Leaves from './DashBoard/Leaves';
import { useSelector } from 'react-redux';
import "./DashBoardHome.css"

function DashboardHome() {
  const { user } = useSelector((state) => state.profile)
  return (
    <div style={{backgroundColor:'azure', marginTop:-20}}>
      <h1 style={{marginLeft: 300}}> Hello, {user.name.toUpperCase()}</h1>
      <div style={{marginLeft: 300}}>
        <div className="graph1" style={{display: "flex",}}>
           <Employee />
           <Tasks/>
        </div>
        <div className='graph2' style={{display: "flex"}}>
        <Category />
        <Leaves/>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
