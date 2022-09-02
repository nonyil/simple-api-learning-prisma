import { Request, Response } from 'express';
import { GetMovieByDateUseCase } from './get-movie-by-date-use-case';


export class GetMovieByDateController {
  async handle(req: Request, res: Response) {
    
    const getMovieByDateUseCase = new GetMovieByDateUseCase();

    const result = await getMovieByDateUseCase.execute();

    return res.status(201).json(result);
  }
}