import express from "express";
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, addCourseToStudent } from "../controllers/Student.controller.js";

const router = express.Router();


/**
 * @swagger
 * /students:
 *  get:
 *    summary: Get All Students
 *    tags: [Student]      
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
 *           description: GPA of the sudent
 *       example:
 *         fullName: Nikola Tesle
 *         gpa: 3.65
 */