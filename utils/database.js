import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://damatsumoto:425278ada@cluster0.3cweq.mongodb.net/appDataBase?retryWrites=true&w=majority");
    console.log("Success: Connected to MongoDB");
  } catch(err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
}

export default connectDB;