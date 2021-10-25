import StudentService from '../services/StudentService.js';

const service = new StudentService();
 
export const getStudents = async (req, res) => {
    try {
        const students = await service.getAllStudents();
        res.status(200).send(students);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
 
export const getStudentById = async (req, res) => {
    try {
        const student = await service.getStudentById(req.params.id)
        res.status(200).send(student);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const createStudent = async (req, res) => {
    try {
        await service.createStudent(req.body);
        res.status(201).json({ "message": "Student Created" });
    } catch (err) {
        res.status(400).send(err.message);
    }
}

export const updateStudent = async (req, res) => {
    try {
        await service.updateStudentById(req.params.id, req.body)
        res.status(201).json({ "message": "Student Updated" });
    } catch (err) {
        res.status(404).send(err.message);
    }
}
 
export const deleteStudent = async (req, res) => {
    try {
        await service.deleteStudentById(req.params.id);
        res.status(200).json({ "message": "Student Deleted" });
    }
    catch (err) {
        res.status(404).send(err.message);
    }
}

export const addCourseToStudent = async (req, res) => {
    try {
        await service.addCourseToStudent(req.params.id, req.body.courseId);
        res.status(201).json({ "message": "Student Has Enrolled To The Course!" });
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}