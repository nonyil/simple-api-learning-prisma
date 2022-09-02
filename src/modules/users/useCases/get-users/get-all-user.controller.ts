import { Request, Response } from 'express';
import { GetAllUsersUseCase } from './get-all-users-use-case';


export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.execute();

    return res.status(201).json(result);
  }
}