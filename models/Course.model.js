export default function CourseModel(sequelize, DataTypes) {

    const Course = sequelize.define('Course', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        crn: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        courseName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zoomLink: {
            type: DataTypes.STRING,
        }
    },{
      freezeTableName: true
    });  
    return Course;
};