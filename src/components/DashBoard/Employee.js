import { getEmployees } from "../../services/operations/add";
import React, { useState, useEffect } from "react";
import { getAdmin } from "../../services/operations/add";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "../DashBoardHome.css"
Chart.register(ArcElement);

function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesData = await getEmployees();
        setEmployees(employeesData);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchData();
  }, []);

  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminData = await getAdmin();
        setAdmin(adminData);
      } catch (error) {
        console.error("Error fetching admin:", error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Admins", "Employees"],
    datasets: [
      {
        data: [admin.length, employees.length],
        backgroundColor: [
          "rgba(255, 99, 132, 1)", // Red for Admins
          "rgba(54, 162, 235, 1)", // Blue for Employees
        ],
      },
    ],
  };
  return (
    <div>
      <div className="pie-container">
        <div className="pie-content">
           <div>
        <p>Total Employees</p>
        <p>{employees.length}</p>
        </div>
        <div>
        <p>Total Admin</p>
        <p>{admin.length}</p>
           </div>
        </div>
        <div className="pie-graph" style={{ width: "200px", height: "200px" }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Employee;
