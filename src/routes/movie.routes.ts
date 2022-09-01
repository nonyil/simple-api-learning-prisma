import { Router } from 'express';
import { CreateMovieController } from '../modules/movies/useCases/create-movie/create-movie.controller';

const createMovieController = new CreateMovieController();

export const movieRoutes = Router();

movieRoutes.post('/', createMovieController.handle);