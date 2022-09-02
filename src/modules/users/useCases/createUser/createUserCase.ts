import { CustomError } from './../../../../Errors/CustomError';
import { User } from '@prisma/client';
import { CreateUserDTO } from './../../dtos/create-user-dto';
import prisma from '../../../../prisma/client';


export class CreateUserUseCase {
  async execute({name, email}: CreateUserDTO): Promise<User> {
    const userExist = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userExist) {
      throw new CustomError('User already exists', 400);
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user;
  }

}