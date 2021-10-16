import db from '../models/Index.js';
import { courseService, studentService } from '../routes/routes.js';

class TeacherService {

    teacher = db.Teacher;

    createTeacher = (teacher) => {
        this.teacher.create(teacher);
    }

    getAllTeachers = () => {
        return this.teacher.findAll();
    }

    getTeacherById = (id) => {
        return this.teacher.findByPk(id, {
            include: [
                { model: courseService.course, as: 'course' }
            ]
        });
    }

    updateTeacherById = (id, teacher) => {
        this.teacher.update(teacher, {
            where: { id }
        });
    }

    deleteTeacherById = (id) => {
        this.teacher.destroy({
            where: { id }
        });
    }
  
    addCourseToTheTeacher = async (courseBody, teacherId) => {
        const teacher = await this.getTeacherById(teacherId);
        const course = await courseService.createCourse(courseBody);
        await teacher.addCourse(course);
    }

}

export default TeacherService;