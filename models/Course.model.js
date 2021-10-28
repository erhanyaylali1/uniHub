export default function CourseModel(sequelize, DataTypes) {

    const Course = sequelize.define('Course', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        crn: {
            type: DataTypes.STRING,
            unique: true
        },
        courseName: {
            type: DataTypes.STRING,        
        },
        zoomLink: {
            type: DataTypes.STRING,
        },
        day: {
            type: DataTypes.INTEGER,
        },
        duration: {
            type: DataTypes.INTEGER,
        },
        startTime: {
            type: DataTypes.STRING,
        },
        studentNumber: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        capacity: {
            type: DataTypes.INTEGER,
        }
    },{
      freezeTableName: true
    });  
    return Course;
};