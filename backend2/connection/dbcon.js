import mongoose from "mongoose";

const dbcon = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "FOOD_WEBSITE",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error.message);
    });
};

export default dbcon;
