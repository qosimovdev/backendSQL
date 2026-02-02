const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.User = require("./userSchema")(sequelize, Sequelize.DataTypes)

module.exports = db