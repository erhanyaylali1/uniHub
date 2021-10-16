import config from "../config/db.config.js";
import { Sequelize } from "sequelize";
import TeacherModel from "./Teacher.model.js";
import CourseModel from "./Course.model.js";
import StudentModel from "./Student.model.js";

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

db.Teacher.hasMany(db.Course, { as: "course" });
db.Course.belongsTo(db.Teacher, { foreingKey: 'teacherId', });

db.Student.belongsToMany(db.Course, { through: 'StudentHasCourse' });
db.Course.belongsToMany(db.Student, { through: 'StudentHasCourse' });

await db.sequelize.sync();

export default db;