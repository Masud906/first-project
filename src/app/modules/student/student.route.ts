import express from 'express';
import { StudentController } from './sutdent.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);

router.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoutes = router;
