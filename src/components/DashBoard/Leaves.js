import React,{useEffect, useState} from 'react'
import { getLeaveType } from '../../services/operations/add';
import { getCategory } from "../../services/operations/add";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../DashBoardHome.css"
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Leaves() {
    // const[leaves,setleaves]=useState({sick:[], annual:[]})

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const allleaves = await getLeaveType();
    //         setleaves({sick:allleaves.sick || [],
    //             annual:allleaves.annual || []
    //         })

    //       } catch (error) {
    //         console.error("Error fetching admin:", error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

      const [categories, setCategories] = useState([]);

      useEffect(() => {
          const fetchCategoriesData = async () => {
              const fetchedCategories = await getCategory();
              setCategories(fetchedCategories);
          };
          fetchCategoriesData();
      }, []);


       // Prepare data for the chart
       const chartData = {
        labels: categories.map(category => category.categoryName),
        datasets: [{
            label: 'Number of Leaves',
            data: categories.map(category => category.leavesArray.length),
            backgroundColor: [ 'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',], // Adjust as needed
            borderColor: 'rgba(54, 162, 235, 1)', // Adjust as needed
            borderWidth: 1
        }]
    };

  return (
    <div className="leave-graph">
           <div  style={{ position: 'relative', height: '200px', width: '400px'}}>
    <h2 style={{textDecoration:'none'}}>Leaves</h2>
    <Bar data={chartData} />
     </div>
    </div>

  )
}

export default Leaves