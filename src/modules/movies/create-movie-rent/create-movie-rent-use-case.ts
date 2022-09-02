
import { CustomError } from '../../../Errors/CustomError';
import prisma from '../../../prisma/client';
import { CreateMovieRentDTO } from './../dtos/movie-rent';


export class CreateMovieRentUseCase {
  async execute({movieId, userId}: CreateMovieRentDTO): Promise<void> {
    const movieExist = await prisma.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!movieExist) {
      throw new CustomError('Movie not found', 404);
    }

    const movieRent = await prisma.movieRent.findFirst({
      where: {
        movieId,
      }
    });

    if (movieRent) {
      throw new CustomError('Movie already rented', 400);
    }

    const userExist = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!userExist) {
      throw new CustomError('User not found', 404);
    }

    await prisma.movieRent.create({
      data: {
        movieId,
        userId
      }
    });
  }
}