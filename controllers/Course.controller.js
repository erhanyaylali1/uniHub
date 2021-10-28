import CourseService from '../services/CourseService.js';

const service = new CourseService();
 
export const createCourse = async (req, res) => {
    try {
        service.createCourse(req.body);
        res.status(201).send("Course has created successfully!");
    } catch (err) {
        res.status(400).send(err.message);
    }
}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await service.getAllCourses();
        res.status(200).send(courses);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const getCourseById = async (req, res) => {
    try {
        const course = await service.getCourseById(req.params.id);
        res.status(200).send(course);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const getStudentsByCourseId = async (req, res) => {
    try {
        const students = await service.getStudentsByCourseId(req.params.id);
        res.status(200).send(students);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const addStudentToCourse = async (req, res) => {
    try {
        await service.addStudentToCourse(req.params.id, req.params.studentId);
        res.status(201).send("Student has successfully enrolled to the course!");
    } catch (err) {
        res.status(404).send(err.message);
    }
}

export const addHomeworkToTheCourse = async (req, res) => {
    try {
        await service.addHomeworkToTheCourse(req.body.teacherId, req.body.courseId, req.body.homework);
        res.status(201).send("Homework Successfully Created!");
    } catch (err) {
        res.status(400).send(err.message);
    }
}

export const addHomeworkFile = async (req, res) => {
    try {       
        const { deadLine, homeworkName, type } = req.body
        const filePath = req.files[0].path;
        console.log(deadLine)
        await service.addHomeworkToTheCourse(req.params.courseId, deadLine, homeworkName, type, filePath);
        res.status(201).send("Ödev eklendi")
    } catch (err) {
        res.status(400).send(err.message)
    }
}