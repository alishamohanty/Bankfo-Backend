const path = require('path')
module.exports = {
    port: process.env.PORT || 8082,
    db: {
        databaseName: process.env.DB_NAME || 'demo',
        user: process.env.USER || 'user',
        password: process.env.PASSWORD || 'password',
        options: {
            host: process.env.HOST || 'host',
            connectionURI: process.env.connectionURI || ''
        }
    }
}