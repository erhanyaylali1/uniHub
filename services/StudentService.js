import db from '../models/Index.js';
import { courseService, teacherService } from '../routes/routes.js';

class StudentService {

    student = db.Student;

    createStudent = (student) => {
        try {
            this.student.create(student);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    getAllStudents = () => {
        try {
            return this.student.findAll();
        } catch (err) {
            throw new Error(err.message);
        }
    }

    getStudentById = async (id) => {
        const student = await this.student.findByPk(id, {
            include: [
                { model: courseService.course }
            ]
        });
        if(student === null){
            throw new Error("Student not found.");
        } else {
            return student;
        }
    }

    updateStudentById = (id, student) => {
        try {
            this.student.update(student, { where: { id } });
        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteStudentById = (id) => {
        try{
            this.student.destroy({ where: { id } });
        } catch (err) {
            throw new Error(err.message);
        }
    }

    addCourseToStudent = async (studentId, courseId) => {

        const student = await this.getStudentById(studentId);
        const course = await courseService.getCourseById(courseId);

        if(student === null){
            throw new Error("Student Not Found!");
        } else if (course === null) {
            throw new Error("Course Not Found!");
        }

        try {
            await student.addCourse(course);
            await course.addStudent(student);
        } catch (err) {
            throw new Error(err.message);
        }
    }
  
}

export default StudentService;