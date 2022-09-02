import { GetAllUserController } from './../modules/users/useCases/get-users/get-all-user.controller';
import { CreateUserController } from './../modules/users/useCases/createUser/create-user-controller';
import { Router } from "express";

const createUserController = new CreateUserController();
const getAllUsers = new GetAllUserController();


export const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', getAllUsers.handle);
