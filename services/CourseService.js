import db from '../models/Index.js';
import { studentService, teacherService } from '../routes/routes.js';

class CourseService {

    course = db.Course;
  
    createCourse = (course) => {
        return this.course.create(course);
    }

    getAllCourses = () => {
        return this.course.findAll();
    }

    getCourseById = async (id) => {
        const course = await this.course.findByPk(id);
        if(course === null){
            throw new Error("Course Not Found");
        } else {
            return course;
        }
    }
  
    getStudentsByCourseId = async (id) => {
        const course = await this.course.findByPk(id, {
            include: [ 
                { model: studentService.student, as: 'Students' }
            ]
        });
        if(course === null){
            throw new Error("Course Not Found");
        } else {
            return course;
        }
    }

    addStudentToCourse = async (courseId, studentId) => {

        const student = await studentService.getStudentById(studentId);
        const course = await this.getCourseById(courseId);

        try{
            if(student === null){
                throw new Error("Student Not Found!");
            } else if (course === null) {
                throw new Error("Course Not Found!");
            }
    
            if(course.studentNumber === course.capacity){
                throw new Error("Course is full of its student capacity!");
            } else {
                await student.addCourse(course);
                await course.addStudent(student);
                await course.increment('studentNumber')
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    addHomeworkToTheCourse = async (courseId, deadLine, homeworkName, filePath) => {

        try {

            const course = await this.getCourseById(courseId);
            
            if(course === null) {
                throw new Error("Course Not Found");
            }

            const homework = await db.Homework.create({ deadLine, homeworkName, filePath });
            course.addHomework(homework);

        } catch (err) {
            throw new Error(err.message);
        }

    }

    addExamToTheCourse = async (courseId, exam, questions, files) => {
        const examDb = await db.Exam.create({ examName: exam.examName, startDate: exam.date[0], deadLine: exam.date[1] });
        let counter = 0;
        questions.map(async (el) => {
            if(el.image === null) {
                el.imagePath = ""
            } else {
                el.imagePath = files[counter].path;
                counter += 1;
            }
            const question = await db.Question.create(el);
            examDb.addQuestion(question);
        })
        const course = await this.getCourseById(courseId);
        course.addExam(examDb)
    }

}

export default CourseService;