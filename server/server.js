import express from "express";
import dotenv from "dotenv";
import DATABASE_CONNECT from "./database/database.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
// instances
const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/BuyZone";
console.log(DATABASE_URL);
// database connection
DATABASE_CONNECT(DATABASE_URL);
// middlewares

// routes
app.use("/api", userRouter);

// listening the server
app.listen(PORT, () => {
  console.log(` ${PORT} Server is running on port `);
});
