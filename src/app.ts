import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parsser
app.use(express.json());
app.use(cors());

//applocation route
app.use('/api/v1/student', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getAController);

console.log(process.cwd());

export default app;
