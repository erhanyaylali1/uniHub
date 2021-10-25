import express from "express";
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, addCourseToStudent } from "../controllers/Student.controller.js";

const router = express.Router();


/**
 * @swagger
 * /students:
 *  get:
 *    summary: Get All Students
 *    tags: [Student] 
 *    responses:
 *     200:
 *      description: Get All Students. 
 *     500:
 *       description: Interval Server Error.     
*/
router.get('/students', getStudents);



/**
 * @swagger
 * /students/{id}:
 *  get:
 *   summary: Get Student By Id
 *   tags: [Student]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   responses:
 *    200:
 *      description: Get Student By Id.
 *    404:
 *       description: Not Found.
*/
router.get('/students/:id', getStudentById);




/**
 * @swagger
 * /students:
 *  post:
 *   summary: Create Student
 *   tags: [Student]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Student'
 *   responses:
 *    201:
 *      description: Succesfully Created.
 *    400:
 *       description: Bad Request.
*/
router.post('/students', createStudent);



/**
 * @swagger
 * /students/{id}:
 *  put:
 *   summary: Update Student By Id
 *   tags: [Student]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Student'
 *   responses:
 *    201:
 *      description: Succesfully Updated.
 *    404:
 *       description: Not Found.
*/
router.put('/students/:id', updateStudent);



/**
 * @swagger
 * /students/{id}:
 *  delete:
 *   summary: Delete Student By Id
 *   tags: [Student]
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
router.delete('/students/:id', deleteStudent);

/**
 * @swagger
 * /students/{id}:
 *  post:
 *   summary: Add Course To Student
 *   tags: [Student]
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
 *    201:
 *      description: Succesfully Added.
 *    404:
 *       description: Not Found.
*/
router.post('/students/:id', addCourseToStudent);


export default router;


/**
  * @swagger
  * tags:
  *   name: Student
  *   description: The Student managing API
  */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - fullName
 *       properties:
 *         id:
 *           type: string
 *           description: Id of the student
 *         fullName:
 *           type: string
 *           description: Full name of student
 *         gpa:
 *           type: double
 *           description: GPA of the student
 *         phone:
 *           type: string
 *           description: phone number of the student
 *         email:
 *           type: string
 *           description: email of the student
 *         studentNumber:
 *           type: string
 *           description: student number of the student
 *         password:
 *           type: string
 *           description: password of the student
 *       example:
 *         fullName: Nikola Tesla
 *         gpa: 3.65
 *         email: nikolatesla@gmail.com
 *         phone: 23482384238
 *         studentNumber: 23423432
 *         password: deneme123
 */