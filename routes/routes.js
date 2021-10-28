import express from "express";
import TeacherRoutes from './Teacher.routes.js';
import StudentRoutes from './Student.routes.js';
import CourseRoutes from './Course.routes.js';
import UniversityRoutes from './University.routes.js';

import TeacherService from '../services/TeacherService.js';
import StudentService from '../services/StudentService.js';
import CourseService from '../services/CourseService.js';
import UniversityService from '../services/UniversityService.js';
import path from "path";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello There!")
})
router.use(TeacherRoutes);
router.use(StudentRoutes);
router.use(CourseRoutes);
router.use(UniversityRoutes);
router.post('/download', (req, res) => {
    try{
        const filePath = path.join(path.resolve(), req.body.path)
        console.log(filePath)
        res.download(filePath, function (err) {
            console.log(err);
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
})

const teacherService = new TeacherService();
const studentService = new StudentService();
const courseService = new CourseService();
const universityService = new UniversityService();
export { teacherService, studentService, courseService, universityService };

export default router;