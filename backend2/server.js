import express from "express";
import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log("server is running on port 3000");
});
