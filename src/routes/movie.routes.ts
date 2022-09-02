import { CreateMovieRentController } from './../modules/movies/create-movie-rent/create-movie-rent.controller';
import { Router } from 'express';
import { CreateMovieController } from '../modules/movies/useCases/create-movie/create-movie.controller';

const createMovieController = new CreateMovieController();
const createMovieRent = new CreateMovieRentController();

export const movieRoutes = Router();

movieRoutes.post('/', createMovieController.handle);
movieRoutes.post("/rent", createMovieRent.handle);