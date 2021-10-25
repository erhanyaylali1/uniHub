export default function CourseModel(sequelize, DataTypes) {

    const University = sequelize.define('University', {
        id: {
            primaryKey: true,
            type: DataTypes.DOUBLE,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        foundationYear: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        }
    },{
      freezeTableName: true
    });  
    return University;
};