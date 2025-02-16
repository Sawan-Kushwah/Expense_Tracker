import ExpenseForm from "@/components/ExpenseForm";
import ShowDashboard from "@/components/ShowDashboard";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }) {
  let editData;
  const action = await searchParams;

  if (action?.deleting !== undefined && action?.deleting.length > 0) {

    try {
      await axios.delete(`${process.env.APP_URL}/api/deleteExpense`, {
        data: { id: action.deleting },
      });
    } catch (error) {
      console.log(error)
    }

    redirect('/')

  } else if (action?.editing !== undefined && action?.editing.length > 0) {

    editData = JSON.parse(action.editing)

    try {
      await axios.delete(`${process.env.APP_URL}/api/deleteExpense`, {
        data: { id: editData.id },
      });
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Personal Monthly Expense Tracker
      </h1>
      <div className="w-full max-w-3xl">
        <ExpenseForm {...editData} />
      </div>
      <div className="ShowDetials w-full flex justify-center p-10 border flex-col rounded-lg my-16 ">
        <h1 className="text-6xl font-bold text-center mb-8">
          Dashboard
        </h1>
        <ShowDashboard />
      </div>
    </div>
  );
}
