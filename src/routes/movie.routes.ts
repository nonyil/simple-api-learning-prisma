import { GetMovieByDateController } from './../modules/movies/useCases/get-movie/get-movie-by-date.controller';
import { CreateMovieRentController } from './../modules/movies/create-movie-rent/create-movie-rent.controller';
import { Router } from 'express';
import { CreateMovieController } from '../modules/movies/useCases/create-movie/create-movie.controller';

const createMovieController = new CreateMovieController();
const createMovieRent = new CreateMovieRentController();
const getMovies = new GetMovieByDateController();

export const movieRoutes = Router();

movieRoutes.post('/', createMovieController.handle);
movieRoutes.post("/rent", createMovieRent.handle);
movieRoutes.get("/release", getMovies.handle);