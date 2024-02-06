import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import MovieUploadRouter from "./routes/movieUploadData.route.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_DB)
  .then((e) => console.log("connected to MONGO_DB"))
  .catch((e) => console.log(e));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is runnig at port number ${PORT}`);
});

app.use("/api", MovieUploadRouter);
