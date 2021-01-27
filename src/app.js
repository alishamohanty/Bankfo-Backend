const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const config = require('./config/config')
const {sequelize} = require('./db')

const indexRouter = require('./routes');

const app = express();

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
