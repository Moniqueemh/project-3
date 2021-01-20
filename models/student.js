

module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define(
        'Student',
        {
            // The email cannot be null, and must be a proper email before creation
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // The password cannot be null
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    );

    Student.associate = function (models) {
        // Associating User with Notes
        // When an User is deleted, also delete any associated Notes
        Student.belongsTo(models.School, {
            onDelete: 'cascade'
        });
    };

    return Student;
};