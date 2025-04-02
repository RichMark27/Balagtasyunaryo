import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "../config/env.js";

if (!MONGO_URI) {
  console.log("define MONGO_URI in .env file");
  process.exit(1);
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB is Connected with env ${NODE_ENV}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
