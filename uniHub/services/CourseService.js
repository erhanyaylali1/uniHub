import db from '../models/Index.js';
import { studentService, teacherService } from '../routes/routes.js';

class CourseService {

    course = db.Course;
  
    createCourse = (course) => {
        return this.course.create(course);
    }

    getAllCourses = () => {
        return this.course.findAll();
    }

    getCourseById = (id) => {
        return this.course.findByPk(id);
    }
  
    getStudentsByCourseId = (id) => {
        return this.course.findByPk(id, {
            include: [ 
                { model: studentService.student, as: 'Students' }
            ]
        });
    }
}

export default CourseService;