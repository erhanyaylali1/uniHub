import express from "express";
import { getAllCourses, createCourse, getStudentsByCourseId } from "../controllers/Course.controller.js";

const router = express.Router();


/**
 * @swagger
 * /courses:
 *  get:
 *    summary: Get All Courses
 *    tags: [Course]      
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
*/
router.post('/courses', createCourse);




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
 *       example:
 *         crn: 34326
 *         courseName: Software Engineering
 */