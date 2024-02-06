import express from "express";
import {
  MovieUploadDataController,
  getMoviesData,
} from "../controller/movieUploadData.controller.js";

const router = express.Router();

router.post("/admin-dashboard", MovieUploadDataController);

router.get("/getAllMovies", getMoviesData);

export default router;
