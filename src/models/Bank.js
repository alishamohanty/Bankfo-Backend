const {sequelize, DataTypes} = require('../db');

const Bank = sequelize.define('banks', {
    name: DataTypes.STRING(49),
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = Bank