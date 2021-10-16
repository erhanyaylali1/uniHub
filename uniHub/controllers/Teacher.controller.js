import TeacherService from '../services/TeacherService.js';

const service = new TeacherService();

export const getTeachers = async (req, res) => {
    try {
        const teachers = await service.getAllTeachers();
        res.send(teachers);
    } catch (err) {
        console.log(err);
    }
}
 
export const getTeacherById = async (req, res) => {
    try {
        const teacher = await service.getTeacherById(req.params.id)
        res.send(teacher);
    } catch (err) {
        console.log(err);
    }
}

export const createTeacher = async (req, res) => {
    try {
        await service.createTeacher(req.body);
        res.json({ "message": "Teacher Created" });
    } catch (err) {
        console.log(err);
    }
}

export const updateTeacher = async (req, res) => {
    try {
        await service.updateTeacherById(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Teacher Updated" });
    } catch (err) {
        console.log(err);
    }
}
 
export const deleteTeacher = async (req, res) => {
    try {
        await service.deleteTeacherById(req.params.id);
        res.json({ "message": "Teacher Deleted" });
    } catch (err) {
        console.log(err);
    }
}

export const addCourseToTeacher = async (req, res) => {
    try {
        await service.addCourseToTheTeacher(req.body, req.params.id);
        res.json({ "message": "Course added to Teacher" });        
    } catch (err) {
        console.log(err);
    }
}