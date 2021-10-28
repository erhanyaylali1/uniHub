import db from '../models/Index.js';
import { courseService, studentService } from '../routes/routes.js';

class TeacherService {

    teacher = db.Teacher;

    createTeacher = (teacher) => {
        try {
            this.teacher.create(teacher);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    getAllTeachers = () => {
        try {
            return this.teacher.findAll();
        } catch (err) {
            throw new Error(err.message);
        }
    }

    getTeacherById = async (id) => {
        const teacher = await this.teacher.findByPk(id, {
            include: [
                { model: courseService.course, as: 'courses' }
            ]
        });
        if(teacher === null) {
            throw new Error("Teacher Not Found!");
        } else {
            return teacher;
        }
    }

    updateTeacherById = (id, teacher) => {
        try {
            this.teacher.update(teacher, {
                where: { id }
            });
        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteTeacherById = (id) => {
        try {
            this.teacher.destroy({
                where: { id }
            });
        } catch (err) {
            throw new Error(err.message);
        }        
    }
  
    addCourseToTheTeacher = async (courseBody, teacherId) => {
        try {
            const teacher = await this.getTeacherById(teacherId);
            const course = await courseService.createCourse(courseBody);
            if(teacher == null) {
                throw new Error("Teacher Not Found!");
            } else {
                await teacher.addCourse(course);
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

}

export default TeacherService;