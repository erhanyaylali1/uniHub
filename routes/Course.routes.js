import express from "express";
import { getAllCourses, createCourse, getStudentsByCourseId, 
    addStudentToCourse, addHomeworkToTheCourse, addHomeworkFile, addExamToCourse, getExamById, saveExamResultById } from "../controllers/Course.controller.js";
import multer from 'multer';

const router = express.Router();

/**
 * @swagger
 * /courses:
 *  get:
 *    summary: Get All Courses
 *    tags: [Course]    
 *    responses:
 *     200:
 *      description: Get All Courses. 
 *     500:
 *      description: Interval Server Error.   
*/
router.get('/courses', getAllCourses);



/**
 * @swagger
 * /courses/{id}:
 *  get:
 *   summary: Get Course By Id
 *   tags: [Course]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   responses:
 *    200:
 *     description: Get Students By Course. 
 *    404:
 *     description: Not Found.   
*/
router.get('/courses/:id', getStudentsByCourseId);



/**
 * @swagger
 * /courses:
 *  post:
 *   summary: Create Course
 *   tags: [Course]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Course'
 *   responses:
 *    201:
 *     description: Successfully Created. 
 *    400:
 *     description: Bad Request.  
*/
router.post('/courses', createCourse);

/**
 * @swagger
 * /courses/{id}/{studentId}:
 *  post:
 *   summary: Add Student To Course
 *   tags: [Course]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *    - in: path
 *      name: studentId
 *      required: true
 *   responses:
 *    201:
 *     description: Successfully Created. 
 *    404:
 *     description: Bad Request.  
*/
router.post('/courses/:id/:studentId', addStudentToCourse);

/**
 * @swagger
 * /courses/addHomework:
 *  post:
 *   summary: Add Homework To Course
 *   tags: [Course]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/AddHomeworkToCourse'
 *   responses:
 *    201:
 *     description: Successfully Created. 
 *    400:
 *     description: Bad Request.  
*/
router.post('/courses/addHomework', addHomeworkToTheCourse);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/homeworks/")
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toLocaleDateString() + "-" + file.originalname)
    },
})
const upload = multer({ storage: storage });
router.post('/courses1/:courseId/addHomework', upload.array('files'), addHomeworkFile);


const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/exams/")
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toLocaleDateString() + "-" + file.originalname)
    },
})
const upload2 = multer({ storage: storage2 });
router.post('/courses1/:courseId/addExam', upload2.array('files'), addExamToCourse);

router.post('/courses3/getExam/:examId', getExamById);

router.post('/courses/addExamResult', saveExamResultById);

export default router;


/**
  * @swagger
  * tags:
  *   name: Course
  *   description: The Course managing API
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - courseName
 *         - crn
 *       properties:
 *         id:
 *           type: string
 *           description: Id of the Course
 *         crn:
 *           type: string
 *           description: CRN of the Course
 *         courseName:
 *           type: double
 *           description: Name of the Course
 *         zoomLink:
 *           type: double
 *           description: Zoom Link of the Course
 *         studentNumber:
 *           type: integer
 *           description: Number of Student
 *         capacity:
 *           type: integer
 *           description: Student Capacity of the Course
 *       example:
 *         crn: 34326
 *         courseName: Software Engineering
 *         capacity: 50
 * 
 *     AddHomeworkToCourse:
 *       type: object
 *       required:
 *        - courseId
 *        - teacherId
 *        - homework
 *       properties: 
 *        courseId:
 *         type: string
 *         description: Id of the Course
 *        teacherId:
 *         type: string
 *         description: Id of the Teacher
 *        homework:
 *         type: object
 *         description: Homework File
 *         required:
 *          - homeworkName
 *          - type
 *          - file
 *          - deadline
 *         properties:
 *          homeworkName:
 *           type: string
 *           description: Name of the homework
 *          type:
 *           type: string
 *           description: Type of the homework
 *          file:
 *           type: string
 *           description: File of the homework
 *          deadline:
 *           type: string
 *           description: Deadline of the homework
 *       example:
 *        courseId: 124
 *        teacherId: 11
 *        file: 
 *         homeworkName: Homework 1
 *         type: Homework
 *         file: C://.....homework1.pdf
 *         deadline: 24.12.2021
 */