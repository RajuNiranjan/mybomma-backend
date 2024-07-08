import express from "express";
import {
  UploadMovie,
  getMovieData,
} from "../controller/movieUploadData.controller.js";

export const router = express.Router();

router.post("/uploadMovie", UploadMovie);
router.get("/getAllMovies", getMovieData);
