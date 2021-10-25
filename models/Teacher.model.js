export default function TeacherModel (sequelize, DataTypes) {
    
    const Teacher = sequelize.define("Teacher", {
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
        teacherNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
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