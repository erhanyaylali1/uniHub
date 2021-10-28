import express from "express";
import { getAllUniversities, getUniversityById, createUniversity, addTeacherToUniversity } from "../controllers/University.controller.js";

const router = express.Router();


/**
 * @swagger
 * /universities:
 *  get:
 *    summary: Get All Courses
 *    tags: [University]    
 *    responses:
 *     200:
 *      description: Get All Universities. 
 *     500:
 *      description: Interval Server Error.   
*/
router.get('/universities', getAllUniversities);



/**
 * @swagger
 * /universities/{id}:
 *  get:
 *   summary: Get Course By Id
 *   tags: [University]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *   responses:
 *    200:
 *     description: Get University By Id. 
 *    404:
 *     description: Not Found.   
*/
router.get('/universities/:id', getUniversityById);



/**
 * @swagger
 * /universities:
 *  post:
 *   summary: Create University
 *   tags: [University]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/University'
 *   responses:
 *    201:
 *     description: Successfully Created. 
 *    400:
 *     description: Bad Request.  
*/
router.post('/universities', createUniversity);


/**
 * @swagger
 * /universities/{universityId}/{teacherId}:
 *  post:
 *   summary: Add Teacher To The University.
 *   tags: [University]
 *   parameters:
 *    - in: path
 *      name: universityId
 *      required: true
 *    - in: path
 *      name: teacherId
 *      required: true
 *   responses:
 *    201:
 *     description: Add Teacher To The University. 
 *    404:
 *     description: Not Found.   
*/
router.post('/universities/:universityId/:teacherId', addTeacherToUniversity);


export default router;


/**
  * @swagger
  * tags:
  *   name: University
  *   description: The University managing API
  */

/**
 * @swagger
 * components:
 *   schemas:
 *     University:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - address
 *         - foundationYear
 *       properties:
 *         id:
 *           type: string
 *           description: Id of the University
 *         name:
 *           type: string
 *           description: Name of the University
 *         phone:
 *           type: string
 *           description: Phone Number of the University
 *         address:
 *           type: double
 *           description: Address of the University
 *         foundationYear:
 *           type: integer
 *           description: Foundation Year of the University
 *       example:
 *         name: Istanbul Technical University
 *         phone: 0 212 285 30 30
 *         address: Maslak, 34467 Sarıyer/İstanbul
 *         foundationYear: 1773
 */