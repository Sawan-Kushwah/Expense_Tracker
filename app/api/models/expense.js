import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 1,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["Clothes", "Travel", "Food", "Game", "Other"],
        },
    },
    { timestamps: true }
);

const Expense = mongoose.models.Expense || mongoose.model("Expense", expenseSchema);

export default Expense;
