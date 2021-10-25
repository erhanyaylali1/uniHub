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
        phone: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        studentNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
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