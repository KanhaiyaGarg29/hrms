import React from "react";
import { useState, useEffect } from "react";
import { getParticulartasks } from "../../services/operations/add";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useSelector } from "react-redux";
Chart.register(CategoryScale);

const Etask = () => {
  const [tasks, setTasks] = useState({
    new: [],
    started: [],
    finished: [],
    due: [],
  });
  const { user } = useSelector((state) => state.profile);
  // const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskData = await getParticulartasks(user.category);
        setTasks({
          new: taskData.new || [],
          started: taskData.started || [],
          finished: taskData.finished || [],
          due: taskData.due || [],
        });
        console.log(user._id);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: ["New", "Started", "Finished", "Due"],
    datasets: [
      {
        label: "Tasks",
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],

        data: [
          tasks.new.length,
          tasks.started.length,
          tasks.finished.length,
          tasks.due.length,
        ],
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
          <h2 style={{ textDecoration: "none" }}>Tasks</h2>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Etask;
