module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        car_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true
        }

    })

    CustomerAddress.associate = models => {
        CustomerAddress.belongsTo(models.Customer, {
            foreignKey: 'customer_id',
            as: "customer"
        })

        CustomerAddress.belongsTo(models.Car, {
            foreignKey: 'car_id',
            as: 'car'
        })
    }

    return CustomerAddress
}