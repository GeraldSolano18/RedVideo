const express = require("express");
const MoviesService = require('../services/movies');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,

} = require('../utils/schemas/movie');

const validationHandler = require('../utils/middleware/validationHandlers');

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MoviesService();

  router.get("/", async (req, res, next) => {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listend',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get("/:movieId", validationHandler({ movieId: movieIdSchema }, 'params'), async (req, res, next) => {
    const { movieId } = req.params; 
    try {
      const movies = await moviesService.getMovie({ movieId });

      res.status(200).json({
        data: movies,
        message: 'movie retridve',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post("/", validationHandler(createMovieSchema), async (req, res, next) => {
    const { body: movie } = req;
    try {
      const createMovieId = await moviesService.createMovie({ movie });

      res.status(201).json({
        data: createMovieId,
        message: 'movies created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put("/:movieId", validationHandler({ movieId: movieIdSchema }, 'params'), validationHandler(updateMovieSchema), async (req, res, next) => {
    const { movieId } = req.params; 
    const { body: movie } = req;
    try {
      const updatedmovieId = await moviesService.updateMovie({ movieId, movie });

      res.status(200).json({
        data: updatedmovieId,
        message: 'movie update',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:movieId", validationHandler({ movieId: movieIdSchema }, 'params'), async (req, res, next) => {
    const { movieId } = req.params; 
    try {
      const deletedmovies = await moviesService.deleteMovie({ movieId }) ;

      res.status(200).json({
        data: deletedmovies,
        message: 'movies deleted',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
