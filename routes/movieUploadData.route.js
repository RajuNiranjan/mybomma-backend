import express from "express";
import { MovieUploadDataController } from "../controller/movieUploadData.controller.js";

const router = express.Router();

router.post("/admin-dashboard", MovieUploadDataController);

export default router;
