const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const charactersRouter = require('./routes/characters');

const app = express();

const mongoose = require('mongoose')
const url = "mongodb+srv://dbUser:<hM7tA1kqwtPSzWxC>@cluster0-sndv9.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _=>{
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/characters', charactersRouter);

module.exports = app;
