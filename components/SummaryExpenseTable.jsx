import { generateCategortyWiseExpense, getSortData, totalExpense } from '@/lib/utils';
import React from 'react';

const SummaryExpenseTable = (data) => {
    const map1 = generateCategortyWiseExpense(data);
    const category = [...map1.keys()];
    const expense = [...map1.values()];
    const total = totalExpense(data);
    let sortedData = getSortData(data);
    if (data.expenses.length > 5) {
        sortedData = sortedData.slice(0, 5)
    }
    return (
        <div className="overflow-x-auto p-6">
            <table className="min-w-full border-collapse bg-gray-900 text-gray-300 text-sm shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-800 text-gray-200 text-left">
                        <th className="px-6 py-4 font-semibold border-b border-gray-700">Total Expenses</th>
                        <th className="px-6 py-4 font-semibold border-b border-gray-700">Category Breakdown</th>
                        <th className="px-6 py-4 font-semibold border-b border-gray-700">Most Recent Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-gray-850 even:bg-gray-800 hover:bg-gray-700 transition">
                        <td className="px-6 py-4 border-b border-gray-800 text-lg font-medium text-green-400">₹{total}</td>
                        <td className="px-6 py-4 border-b border-gray-800">
                            <ul className="space-y-2">
                                {category && category.map((cate, index) => (
                                    <li className="flex justify-between" key={index}>
                                        <span>{cate}</span>
                                        <span className="text-gray-400">₹{expense[index]}</span>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-800">
                            <ul className="space-y-2">
                                {sortedData && sortedData.map((details) => (
                                    <li className="flex justify-between" key={details._id} >
                                        <span>{details.date.split('T')[0]}</span>
                                        <span className="text-red-400"> {details.amount} </span>
                                        <span className="text-gray-500">({details.category})</span>
                                    </li>

                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SummaryExpenseTable;
