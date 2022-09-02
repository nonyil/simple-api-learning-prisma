import prisma from './../../../../prisma/client';
import { Movie } from "@prisma/client";
import { CreateMovieDTO } from "../../dtos/movies-dto";
import { CustomError } from '../../../../Errors/CustomError';


export class CreateMovieUseCase {
  async execute({ title, duration, release_date}: CreateMovieDTO): Promise<Movie> {
    const movieExist = await prisma.movie.findUnique({
      where: {
        title
      }
    });
    

    if (movieExist) {
      throw new CustomError('Movie already exists', 400);
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date
      }
    })
    
    return movie;
  }
}
