import MovieUploadData from "../models/movieUploadData.model.js";

export const MovieUploadDataController = async (req, res) => {
  console.log(req.body);
  const { image, title, year, zoner, cast, director, synopsis, discription } =
    req.body;
  const newMovieData = new MovieUploadData({
    image,
    title,
    year,
    zoner,
    cast,
    director,
    synopsis,
    discription,
  });
  await newMovieData.save();
  res.status(200).json("movie data uploaded successfully");
};
