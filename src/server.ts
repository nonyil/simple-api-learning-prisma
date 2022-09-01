import 'express-async-errors';
import { CustomError } from './Errors/CustomError';
import { NextFunction, Request, response, Response } from 'express';
import { routes } from './routes/index';
import express from 'express';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  })
}) 

app.listen(3000, () => console.log("📦 Server is running on port 3000"));