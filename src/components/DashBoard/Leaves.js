import React,{useEffect, useState} from 'react'
import { getLeaveType } from '../../services/operations/add';
import { getCategory } from "../../services/operations/add";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
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
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Adjust as needed
            borderColor: 'rgba(54, 162, 235, 1)', // Adjust as needed
            borderWidth: 1
        }]
    };

  return (
    <div style={{ position: 'relative', height: '400px', width: '600px' }}>
    <h2>Leaves</h2>
    <Bar data={chartData} />
     </div>
  )
}

export default Leaves