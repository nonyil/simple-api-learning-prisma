import { CreateMovieRentUseCase } from './create-movie-rent-use-case';
import { Request, Response } from "express";


export class CreateMovieRentController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { movieId, userId } = req.body;
    const createMovieRentUseCase = new CreateMovieRentUseCase();

    await createMovieRentUseCase.execute({ movieId, userId });

    return res.status(201).send();
  }
}