

module.exports = function (sequelize, DataTypes) {
    const Teacher = sequelize.define(
        'Teacher',
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

    Teacher.associate = function (models) {
        // Associating User with Notes
        // When an User is deleted, also delete any associated Notes
        Teacher.belongsTo(models.School, {
            onDelete: 'cascade'
        });
    };

    return Teacher;
};