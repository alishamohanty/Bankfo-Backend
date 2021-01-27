module.exports = (sequelize, DataTypes) => {
    const Bank = sequelize.define('banks', {
        name: DataTypes.STRING(49),
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true
        }
    })
    return Bank
}