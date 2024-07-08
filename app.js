import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./routes/movie.router.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MONGO_DB"))
  .catch((e) => {
    console.error("Error connecting to MONGO_DB:", e);
    process.exit(1); // Exit the process if there is a DB connection error
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});

app.use("/api", router);

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to my bomma backend" });
  } catch (error) {
    console.log(error);
  }
});

app.options("/api/admin-dashboard", cors());

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
