import mongoose from "mongoose";

const DATABASE_CONNECT = async function name(DATABASE_URL) {
  try {
    // connect to the MongoDB database
    const DB_OPTIONS = {
      dbName: "BuyZone",
    };
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    if (connection) {
      console.log("Database connected successfully");
    } else {
      console.log("Database connection failed");
    }
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default DATABASE_CONNECT;
