
import { CustomError } from '../../../Errors/CustomError';
import prisma from '../../../prisma/client';
import { CreateMovieRentDTO } from './../dtos/movie-rent';


export class CreateMovieRentUseCase {
  async execute({movieId, userId}: CreateMovieRentDTO): Promise<void> {
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!movieExists) {
      throw new CustomError('Movie not found', 404);
    }

    const movieRentedOn = await prisma.movieRent.findFirst({
      where: {
        movieId,
      }
    });


    if (movieRentedOn) {
      throw new CustomError('Movie already rented', 400);
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    

    if (!userExists) {
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
