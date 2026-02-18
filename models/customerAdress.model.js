module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

    })
}