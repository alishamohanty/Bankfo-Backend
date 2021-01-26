const path = require('path')
require('dotenv').config() 

module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'branches' ,
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'password',
        options: {
            host: process.env.DB_HOST || 'localhost',
            dialect: 'postgres'
        }
    }
}