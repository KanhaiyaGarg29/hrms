import React, { useState, useEffect } from "react";
import { getCategory } from "../../services/operations/add";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
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
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Adjust as needed
            borderColor: 'rgba(54, 162, 235, 1)', // Adjust as needed
            borderWidth: 1
        }]
    };

    return (
        <div>
            <h2>Category wise Employees</h2>
            <div style={{ position: 'relative', height: '400px', width: '600px' }}>
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
