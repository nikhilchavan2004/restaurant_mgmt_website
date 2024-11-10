import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dbcon from "./connection/dbcon.js";
import { errorMiddleware } from "./error/error.js";
import router from "./route/rr.js";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

// Set up CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URI, // Ensure this is set correctly
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true, // Allow credentials
  })
);
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/msg", router);

// Connect to the database
dbcon();
app.use(errorMiddleware);
export default app;
