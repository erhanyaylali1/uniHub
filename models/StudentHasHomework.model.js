export default function StudentHasHomeworkModel (sequelize, DataTypes) {
    
    const StudentHasHomework = sequelize.define("StudentHasHomework", {
        note: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
    });
      
    return StudentHasHomework;
};