const Sequelize = require('sequelize')
const config = require('./config/config')
const DataTypes = require('sequelize').DataTypes;

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

module.exports = {sequelize, DataTypes}