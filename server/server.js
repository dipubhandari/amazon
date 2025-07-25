import express from "express";
import dotenv from "dotenv";

dotenv.config();
// instances
const app = express();
const PORT = process.env.PORT || 5001;

// database connection

// middlewares

// routes
app.get("/api/check", (req, res) => {
  res.send("Welcome to the server!");
  console.log("Server is connected successfully");
});

// listening the server
app.listen(PORT, () => {
  console.log(` ${PORT} Server is running on port `);
});
