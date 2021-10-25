export default function CourseModel(sequelize, DataTypes) {

    const Homework = sequelize.define('Homework', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        homeworkName: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        file: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        deadLine: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },{
      freezeTableName: true
    });  
    return Homework;
};