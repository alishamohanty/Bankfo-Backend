var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const config = require('./config/config')
const {sequelize} = require('./models')

var indexRouter = require('./routes');

var app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);


sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server has started on Port ${config.port}`);
    })

