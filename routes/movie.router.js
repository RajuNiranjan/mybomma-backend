import express from "express";
import {
  UploadMovie,
  getMovieData,
} from "../controller/movieUploadData.controller.js";

export const router = express.Router();

router.post("/admin-dashboard", UploadMovie);
router.get("/getAllMovies", getMovieData);
