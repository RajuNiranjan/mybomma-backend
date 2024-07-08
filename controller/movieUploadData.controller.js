import MovieUploadModel from "../models/movieUploadData.model.js";

export const MovieUploadDataController = async (req, res) => {
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
  const newMovieData = new MovieUploadModel({
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

export const UploadMovie = async (req, res, next) => {
  try {
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

    if (
      !image ||
      !title ||
      !year ||
      !zoner ||
      !cast ||
      !director ||
      !trailer ||
      !synopsis ||
      !description
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMovie = new MovieUploadModel({
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

    await newMovie.save();
    return res.status(201).json({ newMovieDetails: newMovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMovieData = async (req, res, next) => {
  try {
    const allMovies = await MovieUploadModel.find();
    return res.status(200).json({ allMoviesData: allMovies });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
