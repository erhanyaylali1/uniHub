import CourseService from '../services/CourseService.js';

const service = new CourseService();
 
export const createCourse = async (req, res) => {
    try {
        service.createCourse(req.body);
        res.status(201).send("Course has created successfully!");
    } catch (err) {
        console.log(err);
    }
}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await service.getAllCourses();
        res.status(200).send(courses);
    } catch (err) {
        console.log(err);
    }
}

export const getCourseById = async (req, res) => {
    try {
        const course = await service.getCourseById(req.params.id);
        res.status(200).send(course);
    } catch (err) {
        res.status(404).send("Course not found!");
        console.log(err);
    }
}

export const getStudentsByCourseId = async (req, res) => {
    try {
        const students = await service.getStudentsByCourseId(req.params.id);
        res.status(200).send(students);
    } catch (err) {
        console.log(err);
    }
}