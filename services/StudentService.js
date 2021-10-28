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
        const student = await this.student.findByPk(id);
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

}

export default StudentService;