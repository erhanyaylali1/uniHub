import db from '../models/Index.js';
import { courseService, teacherService } from '../routes/routes.js';
import _ from 'lodash';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class StudentService {


    student = db.Student;

    //register
    createStudent =  async (student) => {
        try {
            return db.Student.create(student);
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
                { model: db.Exam},
                { model: db.Homework},
                { model: db.Course}
            ]
        });
        if(student === null){
            throw new Error("Student not found.");
        } else {
            return student;
        }
    }

    getStudentLogin = async (where) => {
        try {
            const student = await this.student.findOne({where});
            console.log(student);
            if(student ===  null){
                return null;
            }
            else{
                const token = await jwt.sign(
                    { id: student.id, email:student.email},
                    process.env.TOKEN_KEY,
                );
                student.token = token;
                return student;
            }
        } catch (err) {
            throw new Error(err.message);
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