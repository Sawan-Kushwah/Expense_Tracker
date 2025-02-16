import mongoose from "mongoose"

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("Already connected to MongoDB ✅");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected ✅");
    } catch (error) {
        console.log("Error in connection to db", error)
        process.exit(1)
    }
}

export default connectDB;