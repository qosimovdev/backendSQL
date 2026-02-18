const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_id: {
            type: DataTypes.INTEGER
        },
        car_id: {
            type: DataTypes.INTEGER
        }

    })

    User.beforeSave(async (user, options) => {
        if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 10)
        }
    })

    User.associate = models => {
        User.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
            as: "customer"
        })

        User.belongsTo(models.Car, {
            foreignKey: 'car_id',
            as: 'car'
        })
    }
    return User
}