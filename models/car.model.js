module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    Car.associate = models => {
        Car.hasMany(models.Customer, {
            forignKey: 'car_id',
            as: 'car'
        })
    }
    return Car
}
