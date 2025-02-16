"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";

const ExpenseForm = (expenceDetails) => {
    const router = useRouter()
    const { handleSubmit, register, formState: { errors }, reset, setValue } = useForm();

    const submit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post('/api/addExpense', data);
            if (response.status === 201) {
                console.log(response.data.message)
            }
            reset()
            router.push('/')
        } catch (error) {
            console.log(error.message)
        }
    };

    useEffect(() => {
        setValue("date", expenceDetails?.date ? new Date(expenceDetails.date).toISOString().split('T')[0] : '')
        setValue("description", expenceDetails?.description || '')
        setValue("amount", expenceDetails?.amount || '')
        setValue("category", expenceDetails?.category)
    }, [expenceDetails])

    return (
        <form onSubmit={handleSubmit(submit)} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
            <div className="mb-4">
                <Input type="date" label="Date" {...register("date", { required: "Date is required" })} />
                {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            <div className="mb-4">
                <Input
                    label="Amount"
                    type="number"
                    placeholder="Enter amount in RS (e.g., 500)"
                    {...register("amount", {
                        required: "Amount is required",
                        min: { value: 1, message: "Amount must be greater than 0" }
                    })}
                />
                {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
            </div>

            <div className="mb-4">
                <Input
                    label="Description"
                    type="text"
                    placeholder="Enter description"
                    {...register("description", { required: "Description is required" })}
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div className="mb-4">
                <Select
                    label="Category"
                    className="w-full"
                    options={["Clothes", "Travel", "Food", "Game", "Other"]}
                    {...register("category", { required: "Category is required" })}
                />
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
            </div>


            {expenceDetails?.id?.length > 0 ?
                <SubmitButton label={"Update Expense"} className={"bg-blue-500 hover:bg-blue-600"} />
                :
                <SubmitButton label={"Add Expense"} className={"bg-green-500 hover:bg-green-600"} />
            }
        </form>
    );
};

export default ExpenseForm;
