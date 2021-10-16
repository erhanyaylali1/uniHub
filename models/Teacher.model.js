export default function TeacherModek (sequelize, DataTypes) {
    
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
        isRector: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
      freezeTableName: true
    });
      
    return Teacher;
};