import { getEmployees } from "../../services/operations/add";
import React, { useState, useEffect } from "react";
import { getAdmin } from "../../services/operations/add";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
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
          "rgba(255, 99, 132, 0.6)", // Red for Admins
          "rgba(54, 162, 235, 0.6)", // Blue for Employees
        ],
      },
    ],
  };
  return (
    <div>
      <div>
        <p>Total Employees</p>
        {employees.length}
        <p>Total Admin</p>
        {admin.length}
        <div style={{ width: "300px", height: "200px" }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

export default Employee;
