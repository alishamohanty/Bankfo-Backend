const Sequelize = require('sequelize')
const config = require('../config/config')
const DataTypes = require('sequelize').DataTypes;
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

const Bank = sequelize.define('banks', {
    name: DataTypes.STRING(49),
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    }
})
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

db.Branch = Branch
db.Bank = Bank

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db