import config from "../config/db.config.js";
import { Sequelize } from "sequelize";
import TeacherModel from "./Teacher.model.js";
import CourseModel from "./Course.model.js";
import StudentModel from "./Student.model.js";
import HomeworkModel from "./Homework.model.js";
import UniversityModel from "./University.model.js";
import StudentHasHomeworkModel from "./StudentHasHomework.model.js";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    pool: config.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Teacher = TeacherModel(sequelize, Sequelize);
db.Course = CourseModel(sequelize, Sequelize);
db.Student = StudentModel(sequelize, Sequelize);
db.Homework = HomeworkModel(sequelize, Sequelize);
db.University = UniversityModel(sequelize, Sequelize);
db.StudentHasHomework = StudentHasHomeworkModel(sequelize, Sequelize);

db.University.hasMany(db.Teacher, { as: "teachers" });
db.Teacher.belongsTo(db.University, { foreingKey: 'universityId', });

db.Teacher.hasMany(db.Course, { as: "courses" });
db.Course.belongsTo(db.Teacher, { foreingKey: 'teacherId', });

db.Course.hasMany(db.Homework, { as: "homeworks" });
db.Homework.belongsTo(db.Course, { foreingKey: 'courseId', });

db.Student.belongsToMany(db.Course, { through: 'StudentHasCourse' });
db.Course.belongsToMany(db.Student, { through: 'StudentHasCourse' });

db.Student.belongsToMany(db.Homework, { through: db.StudentHasHomework });
db.Homework.belongsToMany(db.Student, { through: db.StudentHasHomework });

await db.sequelize.sync();

export default db;