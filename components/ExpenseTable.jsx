import React from 'react'
import Form from 'next/form'

const ExpenseTable = (data) => {
    return (
        <div className="p-4 bg-gray-900  text-white">
            <h1 className='text-3xl font-bold text-center mb-8'>Your Expense details</h1>
            <table className="min-w-full bg-gray-800 border border-gray-700 text-white rounded-lg overflow-hidden text-sm">
                <thead>
                    <tr className="bg-gray-700 text-gray-300">
                        <th className="border border-gray-600 p-1">Date</th>
                        <th className="border border-gray-600 p-1">Amount</th>
                        <th className="border border-gray-600 p-1">Description</th>
                        <th className="border border-gray-600 p-1">Category</th>
                        <th className="border border-gray-600 p-1">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.expenses.map((expense) => (
                        <tr key={expense._id} className="text-center border border-gray-700 hover:bg-gray-700 transition">
                            <td className="border border-gray-600 p-1">{new Date(expense.date).toLocaleDateString()}</td>
                            <td className="border border-gray-600 p-1">{expense.amount}</td>
                            <td className="border border-gray-600 p-1">{expense.description}</td>
                            <td className="border border-gray-600 p-1">{expense.category}</td>
                            <td className=" p-1 ">
                                <div className=' flex items-center'>
                                    <Form action={'/'}>
                                        <input name='editing' value={JSON.stringify({ id: expense._id, date: expense.date, amount: expense.amount, description: expense.description, category: expense.category })} className='hidden' readOnly />
                                        <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2 transition text-xs"> Edit </button>
                                    </Form>
                                    <Form action={'/'}>
                                        <input name='deleting' value={expense._id} className='hidden' readOnly />
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition text-xs">Delete</button>
                                    </Form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable