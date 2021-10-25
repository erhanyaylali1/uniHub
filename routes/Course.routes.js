import express from "express";
import { getAllCourses, createCourse, getStudentsByCourseId } from "../controllers/Course.controller.js";

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
 *           type: string
 *           description: Zoom Link of the Course
 *         day:
 *           type: integer
 *           description: Index of the Course Day
 *         duration:
 *           type: integer
 *           description: Length of Course Hours
 *         startTime:
 *           type: string
 *           description: Start Time of Course
 *       example:
 *         crn: 34326
 *         courseName: Software Engineering
 *         zoomLink: ""
 *         day: 1
 *         duration: 3
 *         startTime: 13.30
 */