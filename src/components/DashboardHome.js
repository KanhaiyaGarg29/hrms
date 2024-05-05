import React from 'react';
import Category from './DashBoard/Category';
import Employee from './DashBoard/Employee';
import Tasks from './DashBoard/Tasks';
import Leaves from './DashBoard/Leaves';

function DashboardHome() {
  return (
    <div>
      <h1>Hello Admin Dashboard</h1>
      <div style={{marginLeft: 350}}>
        <Employee />
        <Category />
        <Tasks/>
        <Leaves/>
      </div>
    </div>
  );
}

export default DashboardHome;
