import { NextResponse } from "next/server";
import Expense from "../models/expense";
import connectDB from "../utils/db";

export async function GET() {
    try {
        await connectDB();
        const data = await Expense.find({});
        if (data) {
            return NextResponse.json(data);
        }

    } catch (error) {
        console.log(error)
    }
}