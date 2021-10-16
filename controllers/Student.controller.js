import StudentService from '../services/StudentService.js';

const service = new StudentService();
 
export const getStudents = async (req, res) => {
    try {
        const students = await service.getAllStudents();
        res.send(students);
    } catch (err) {
        console.log(err);
    }
}
 
export const getStudentById = async (req, res) => {
    try {
        const student = await service.getStudentById(req.params.id)
        res.send(student);
    } catch (err) {
        console.log(err);
    }
}

export const createStudent = async (req, res) => {
    try {
        await service.createStudent(req.body);
        res.json({ "message": "Student Created" });
    } catch (err) {
        console.log(err);
    }
}

export const updateStudent = async (req, res) => {
    try {
        await service.updateStudentById(req.params.id, req.body)
        res.json({ "message": "Student Updated" });
    } catch (err) {
        console.log(err);
    }
}
 
export const deleteStudent = async (req, res) => {
    try {
        await service.deleteStudentById(req.params.id);
        res.json({ "message": "Student Deleted" });
    }
    catch (err) {
        console.log(err);
    }
}

export const addCourseToStudent = async (req, res) => {
    try {
        await service.addCourseToStudent(req.params.id, req.body.courseId);
        res.json({ "message": "Student Has Enrolled To The Course!" });
    }
    catch (err) {
        console.log(err);
    }
}