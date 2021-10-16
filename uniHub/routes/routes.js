import express from "express";
import TeacherRoutes from './Teacher.routes.js';
import StudentRoutes from './Student.routes.js';
import CourseRoutes from './Course.routes.js';

import TeacherService from '../services/TeacherService.js';
import StudentService from '../services/StudentService.js';
import CourseService from '../services/CourseService.js';

const router = express.Router();

router.use(TeacherRoutes);
router.use(StudentRoutes);
router.use(CourseRoutes);

const teacherService = new TeacherService();
const studentService = new StudentService();
const courseService = new CourseService();
export { teacherService, studentService, courseService }

export default router;