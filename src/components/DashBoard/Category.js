import React, { useState, useEffect } from "react";
import { getCategory } from "../../services/operations/add";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../DashBoardHome.css"
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);


function Category() {
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
            label: 'Number of Employees',
            data: categories.map(category => category.userId.length),
            backgroundColor:[ 'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',] ,
            borderColor: 'rgba(54, 162, 235, 1)', 
            borderWidth: 1
        }]
    };

    return (
        <div className="category-graph">
            <h2 style={{textDecoration:'none'}}>Category wise Employees</h2>
            <div style={{ position: 'relative', height: '200px', width: '400px'}}>
                <Bar
                    data={chartData}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Category;
