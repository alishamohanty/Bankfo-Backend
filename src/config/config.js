const path = require('path')
require('dotenv').config() 

module.exports = {
    port: process.env.PORT || 8082,
    db_uri: process.env.DB_URI
}