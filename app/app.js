"use strict";


/**
 * import generate
 * by express-generator
 */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

/**
 * import
 */
import bodyParser from 'body-parser';

import indexRouter from './routes/index.js';
import usersRouter from './routes/flowers.js';


/**
 * express server
 * start here
 */
const app = express();

/**
 * middlewares set
 * by express-generator
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

/**
 * import generate
 * by express-generator
 */
app.use(bodyParser({
    extended: false
}));

app.use('/', indexRouter);
app.use('/flowers', usersRouter);

app.listen(8080);
