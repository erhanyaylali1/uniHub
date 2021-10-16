export default function StudentModel (sequelize, DataTypes) {
    
    const Student = sequelize.define('Student', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gpa: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        }
    },{
      freezeTableName: true
    });
    
  
    return Student;
};