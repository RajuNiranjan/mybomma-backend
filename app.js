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
  .connect(process.env.MONGO_DB)
  .then((e) => console.log("connected to MONGO_DB"))
  .catch((e) => console.log(e));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is runnig at port number ${PORT}`);
});

app.use("/api", router);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welocome to my bomma backend" });
});

app.options("/api/admin-dashboard", cors());
