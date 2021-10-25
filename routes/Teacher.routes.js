import express from "express";
import { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher, addCourseToTeacher } from "../controllers/Teacher.controller.js";

const router = express.Router();

/**
 * @swagger
 * /teachers:
 *  get:
 *    summary: Get All Teachers
 *    tags: [Teacher]  
 *    responses:
 *     200:
 *      description: Get All Teachers. 
 *     500:
 *       description: Interval Server Error.

*/
router.get('/teachers', getTeachers);



/**
 * @swagger
 * /teachers/{id}:
 *  get:
 *   summary: Get Teacher By Id
 *   tags: [Teacher]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   responses:
 *    200:
 *      description: Get Teacher By Id.
 *    404:
 *       description: Not Found.
*/
router.get('/teachers/:id', getTeacherById);



/**
 * @swagger
 * /teachers:
 *  post:
 *   summary: Create Teacher
 *   tags: [Teacher]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Teacher'
 *   responses:
 *    201:
 *      description: Succesfully Created.
 *    400:
 *       description: Bad Request.
*/
router.post('/teachers', createTeacher);



/**
 * @swagger
 * /teachers/{id}:
 *  put:
 *   summary: Update Teacher By Id
 *   tags: [Teacher]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Teacher'
 *   responses:
 *    201:
 *      description: Succesfully Created.
 *    400:
 *       description: Bad Request.
*/
router.put('/teachers/:id', updateTeacher);



/**
 * @swagger
 * /teachers/{id}:
 *  delete:
 *   summary: Delete Teacher By Id
 *   tags: [Teacher]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   responses:
 *    200:
 *      description: Succesfully Deleted.
 *    404:
 *       description: Not Found.
*/
router.delete('/teachers/:id', deleteTeacher);



/**
 * @swagger
 * /teachers/{id}:
 *  post:
 *   summary: Add course to the teacher
 *   tags: [Teacher]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       propterty:
 *        courseId: string
 *        description: id of the course
 *       example: 
 *        courseId: 1
 *   responses:
 *    200:
 *      description: Succesfully Added.
 *    404:
 *       description: Not Found.
*/
router.post('/teachers/:id', addCourseToTeacher);


export default router;

/**
  * @swagger
  * tags:
  *   name: Teacher
  *   description: The Teacher managing API
  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - fullName
 *       properties:
 *         id:
 *           type: string
 *           description: Id of the teacher
 *         fullName:
 *           type: string
 *           description: Full name of teacher
 *         isRector:
 *           type: boolean
 *           description: Is Teacher a rector?
 *         phone:
 *           type: string
 *           description: phone number of the student
 *         email:
 *           type: string
 *           description: email of the student
 *         teacherNumber:
 *           type: string
 *           description: student number of the student
 *         password:
 *           type: string
 *           description: password of the student
 *       example:   
 *         fullName: Albert Einstein
 *         isRector: 0
 *         email: nikolatesla@gmail.com
 *         phone: 23482384238
 *         teacherNumber: 23423432
 *         password: deneme123
 */