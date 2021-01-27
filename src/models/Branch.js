const {sequelize, DataTypes} = require('../db');
const Bank = require('./Bank')

const Branch = sequelize.define('branches', {
    ifsc: { 
        type: DataTypes.STRING(11),
        allowNull: false
    },
    bank_id: DataTypes.BIGINT,
    branch: DataTypes.STRING(74),
    address: DataTypes.STRING(195),
    city: DataTypes.STRING(50),
    district: DataTypes.STRING(50),
    state: DataTypes.STRING(26)
})
Branch.belongsTo(Bank, {foreignKey: 'bank_id'})

module.exports = Branch