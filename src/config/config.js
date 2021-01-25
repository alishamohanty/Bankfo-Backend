const path = require('path')
module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'database',
        user: process.env.USER || 'user',
        password: process.env.PASSWORD || 'password',
        options: {
            host: process.env.HOST || 'localhost',
            dialect: 'postgres'
        }
    }
}