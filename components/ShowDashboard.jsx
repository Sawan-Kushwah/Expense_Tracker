import React from 'react'
import ExpenseTable from './ExpenseTable'
import axios from 'axios';
import BarChart from './BarChart';
import PieChart from './PIeChart';
import SummaryExpenseTable from './SummaryExpenseTable';
import BudgetComparisonChart from './BudgetComparisonChart';

const ShowDashboard = async () => {
    const { data } = await axios.get(`${process.env.APP_URL}/api/getExpense`);

    return (
        <>
            <div>
                <div className='flex h-[34rem] border-b-2'>
                    <div className="graph w-2/3">
                        <BarChart expenses={data} />
                    </div>
                    <div className="table w-1/3">
                        <h1 className="text-3xl font-bold text-center mb-8">
                            <ExpenseTable expenses={data} />
                        </h1>
                    </div>
                </div>

                <div className='flex py-16'>
                    <div className="table w-1/2">
                        <h1 className="text-3xl font-bold text-center mb-8">
                            Summary for your expense
                        </h1>
                        <SummaryExpenseTable expenses={data} />
                    </div>
                    <div className="graph w-1/2">
                        <PieChart expenses={data} />
                    </div>
                </div>
                <div className='mt-10 border-t-2'>
                    <BudgetComparisonChart expenses={data} />
                </div>
            </div>
        </>
    )
}

export default ShowDashboard