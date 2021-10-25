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

    getCourseById = async (id) => {
        const course = await this.course.findByPk(id);
        if(course === null){
            throw new Error("Course Not Found");
        } else {
            return course;
        }
    }
  
    getStudentsByCourseId = async (id) => {
        const course = await this.course.findByPk(id, {
            include: [ 
                { model: studentService.student, as: 'Students' }
            ]
        });
        if(course === null){
            throw new Error("Course Not Found");
        } else {
            return course;
        }
    }
}

export default CourseService;