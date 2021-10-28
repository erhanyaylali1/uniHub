export default function TeacherModel (sequelize, DataTypes) {
    
    const Teacher = sequelize.define("Teacher", {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        fullName: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        teacherNumber: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        isRector: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
      freezeTableName: true
    });
      
    return Teacher;
};