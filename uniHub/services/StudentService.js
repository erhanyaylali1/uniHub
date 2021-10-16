import db from '../models/Index.js';
import { courseService, teacherService } from '../routes/routes.js';

class StudentService {

    student = db.Student;
    
    createStudent = (student) => {
        this.student.create(student);
    }

    getAllStudents = () => {
        return this.student.findAll();
    }

    getStudentById = (id) => {
        return this.student.findByPk(id, {
            include: [
                { model: courseService.course }
            ]
        });
    }

    updateStudentById = (id, student) => {
        this.student.update(student, { where: { id } });
    }

    deleteStudentById = (id) => {
        this.student.destroy({ where: { id } });
    }

    addCourseToStudent = async (studentId, courseId) => {
        const student = await this.getStudentById(studentId);
        const course = await courseService.getCourseById(courseId);

        await student.addCourse(course);
        await course.addStudent(student);
    }
  
}

export default StudentService;