import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLeaveType } from "../../services/operations/add";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { getParticulartasks } from "../../services/operations/add";
Chart.register(CategoryScale);

const Etask = () => {
  const [tasks, setTasks] = useState({
    new: [],
    started: [],
    finished: [],
    due: [],
  });
  
  // const [tasks, setTasks] = useState([]);
  const { user } = useSelector((state) => state.profile);
  const [leaves, setleaves] = useState({ accepted: [], rejected: [] });

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allleaves = await getLeaveType(user._id);
        setleaves({
          accepted: allleaves.acceptedleaves || [],
          rejected: allleaves.rejectedleaves || [],
        });
      } catch (error) {
        console.error("Error fetching admin:", error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Accepted", "Rejected"],
    datasets: [
      {
        label: "Leaves",
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],

        data: [leaves.accepted.length, leaves.rejected.length],
      },
    ],
  };
  return (
    <div style={{widows:"fit-content !important"}}>
      <div className="task-graph" style={{borderRadius: "0.3rem",
            overflow: "hidden"}} >
        <div
          style={{
            position: "relative",
            height: "fit-content",
            width: "350px",
            padding: "0.5rem",
            
          }}
        >
          <h2 style={{ textDecoration: "none" }}>Leaves</h2>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Etask;

