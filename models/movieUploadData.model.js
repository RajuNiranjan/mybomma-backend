import mongoose from "mongoose";

const MovieUploadDataSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Numbe,
      required: true,
    },
    zoner: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const MovieUploadData = mongoose.model(
  "MovieUploadData",
  MovieUploadDataSchema
);

export default MovieUploadData;