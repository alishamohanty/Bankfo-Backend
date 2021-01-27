const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')

const config = require('./config/config')
const {sequelize} = require('./db')

const indexRouter = require('./routes');

const app = express();

app.use(logger('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);

sequelize.authenticate()
    .then(() => {
        app.listen(config.port)
        // console.log(`Server has started on Port ${config.port}`);
    })
