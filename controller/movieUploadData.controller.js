import MovieUploadData from "../models/movieUploadData.model.js";

export const MovieUploadDataController = async (req, res) => {
  console.log(req.body);
  const {
    image,
    title,
    year,
    zoner,
    cast,
    director,
    trailer,
    synopsis,
    description,
  } = req.body;
  const newMovieData = new MovieUploadData({
    image,
    title,
    year,
    zoner,
    cast,
    director,
    trailer,
    synopsis,
    description,
  });
  await newMovieData.save();
  res.status(200).json("movie data uploaded successfully");
};

export const getMoviesData = async (req, res) => {
  const data = await MovieUploadData.find({});
  return res.send({
    data: data,
    message: "GET Reply from Home Page",
    params: req.params,
    query: req.query,
  });
};
