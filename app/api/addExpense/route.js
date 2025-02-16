import { NextResponse } from "next/server";
import connectDB from "../utils/db";
import Expense from "../models/expense";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { date, amount, description, category } = body;

        if (!date || !amount || !description || !category) return NextResponse.json({ message: "All field are required" }, { status: 400 })

        const expense = new Expense({ date, amount, description, category });

        await expense.save();

        return NextResponse.json({ message: "Added to database" }, { status: 201 })
    } catch (error) {
        console.log("Error in adding expense task to db", error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


