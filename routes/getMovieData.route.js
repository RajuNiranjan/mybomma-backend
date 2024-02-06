import express from "express";
import { getMoviesData } from "../controller/movieUploadData.controller.js";

const router = express.Router();

router.get("/getAllMovies", getMoviesData);

export default router;
