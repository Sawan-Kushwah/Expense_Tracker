'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { generateCategortyWiseExpense } from '@/lib/utils';

const PieChart = (data) => {
    const map1 = generateCategortyWiseExpense(data)
    const category = [...map1.keys()];
    const categoryExpense = [...map1.values()]
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext("2d");

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // ✅ Create a new Pie Chart
        chartInstance.current = new Chart(ctx, {
            type: "pie",
            data: {
                labels: category,
                datasets: [
                    {
                        label: "Spending Categories",
                        data: categoryExpense,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.6)",  // Red
                            "rgba(54, 162, 235, 0.6)",  // Blue
                            "rgba(255, 206, 86, 0.6)",  // Yellow
                            "rgba(75, 192, 192, 0.6)",  // Green
                            "rgba(153, 102, 255, 0.6)", // Purple
                        ],
                        borderColor: "#fff",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            },
        });

        // ✅ Cleanup on unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className="w-full h-72 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Category-wise Spending</h1>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PieChart;
