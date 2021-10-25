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