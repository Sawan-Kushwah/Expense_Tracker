'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { generateData, generateMonths } from '@/lib/utils';

const BarChart = (data) => {
    let expenseDataMonths = generateMonths(data)
    let expenseDataArray = generateData(data);

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext("2d");

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: expenseDataMonths,
                datasets: [
                    {
                        label: "Expense amount",
                        data: expenseDataArray,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className="w-full h-96">
            <h1 className="text-3xl font-bold mb-8">
                Expense Vs Month
            </h1>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default BarChart;
