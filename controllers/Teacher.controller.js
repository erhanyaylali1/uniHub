import TeacherService from '../services/TeacherService.js';

const service = new TeacherService();

export const getTeachers = async (req, res) => {
    try {
        const teachers = await service.getAllTeachers();
        res.status(200).send(teachers);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
 
export const getTeacherById = async (req, res) => {
    try {
        const teacher = await service.getTeacherById(req.params.id)
        res.status(200).send(teacher);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const createTeacher = async (req, res) => {
    try {
        await service.createTeacher(req.body);
        res.status(201).json({ "message": "Teacher Created" });
    } catch (err) {
        res.status(400).send(err.message);
    }
}

export const updateTeacher = async (req, res) => {
    try {
        await service.updateTeacherById(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ "message": "Teacher Updated" });
    } catch (err) {
        res.status(400).send(err.message);
    }
}
 
export const deleteTeacher = async (req, res) => {
    try {
        await service.deleteTeacherById(req.params.id);
        res.status(200).json({ "message": "Teacher Deleted" });
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const addCourseToTeacher = async (req, res) => {
    try {
        await service.addCourseToTheTeacher(req.body, req.params.id);
        res.status(201).json({ "message": "Course added to Teacher" });        
    } catch (err) {
        res.status(404).send(err.message);
    }
}