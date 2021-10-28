export default function CourseModel(sequelize, DataTypes) {

    const Homework = sequelize.define('Homework', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        homeworkName: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.INTEGER,
        },
        filePath: {
            type: DataTypes.STRING,
        },
        deadLine: {
            type: DataTypes.STRING,
        }
    },{
      freezeTableName: true
    });  
    return Homework;
};