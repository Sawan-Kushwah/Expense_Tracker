"use client"
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { generateCategortyWiseExpense } from "@/lib/utils";

const BudgetComparisonChart = (data) => {
    const map1 = generateCategortyWiseExpense(data)
    const category = [...map1.keys()];
    const categoryExpense = [...map1.values()]
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    let budgetData = [5000, 3000, 1000, 6044, 3453];
    budgetData.slice(category.length)

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: category,
                datasets: [
                    {
                        label: "Budget",
                        data: budgetData,
                        backgroundColor: "rgba(75, 192, 192, 0.5)", // Light blue
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "Actual Spending",
                        data: categoryExpense,
                        backgroundColor: "rgba(255, 99, 132, 0.5)", // Light red
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: "white", // Adjust for dark theme
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: { color: "white" },
                        grid: { color: "rgba(255, 255, 255, 0.2)" },
                    },
                    y: {
                        ticks: { color: "white" },
                        grid: { color: "rgba(255, 255, 255, 0.2)" },
                    },
                },
            },
        });
    }, [data]);

    return (
        <div className="p-4 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold text-center mb-4">Budget vs. Actual Expenses</h2>
            <div className="w-full h-80 bg-gray-800 p-4 rounded-lg">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default BudgetComparisonChart;
