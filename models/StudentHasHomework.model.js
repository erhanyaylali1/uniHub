export default function StudentHasHomeworkModel (sequelize, DataTypes) {
    
    const StudentHasHomework = sequelize.define("StudentHasHomework", {
        note: {
            type: DataTypes.DOUBLE
        },
        file: {
            type: DataTypes.STRING
        }
    });
      
    return StudentHasHomework;
};