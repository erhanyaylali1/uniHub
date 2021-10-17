import express from "express";
import { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher, addCourseToTeacher } from "../controllers/Teacher.controller.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send("hello there")
})


/**
 * @swagger
 * /teachers:
 *  get:
 *    summary: Get All Teachers
 *    tags: [Teacher]
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
 *       example:
 *         fullName: Albert Einstein
 *         isRector: 0
 */
