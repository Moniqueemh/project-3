

module.exports = function (sequelize, DataTypes) {
    const School = sequelize.define(
        'School',
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

    School.associate = function (models) {
        // Associating User with Notes
        // When an User is deleted, also delete any associated Notes
        School.hasMany(models.Teacher, {
            onDelete: 'cascade'
        });
        School.hasMany(models.Student, {
            onDelete: 'cascade'
        });
        // School.belongsTo(models.Teacher, {
        //     onDelete: 'cascade'
        // });
        // School.belongsTo(models.Student, {
        //     onDelete: 'Student'
        // });
    };

    return School;
};