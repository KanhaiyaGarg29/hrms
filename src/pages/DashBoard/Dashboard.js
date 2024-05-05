import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom';
import './DashBoard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content-container">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;