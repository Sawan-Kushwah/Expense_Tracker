import { NextResponse } from "next/server";
import Expense from "../models/expense";
import connectDB from "../utils/db";

export async function DELETE(req) {
    try {
        await connectDB();
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        console.log("Deleting expense with ID:", id);

        const result = await Expense.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Expense not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting expense:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

