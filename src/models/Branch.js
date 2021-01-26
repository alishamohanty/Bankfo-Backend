module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define('Branch', {
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
    return Branch
}