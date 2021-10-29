export default function ExamModel(sequelize, DataTypes) {

    const Exam = sequelize.define('Exam', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        examName: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.STRING,
        },
        deadLine: {
            type: DataTypes.STRING,
        }
    },{
      freezeTableName: true
    });  
    return Exam;
};