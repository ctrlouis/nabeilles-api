"use strict";


import express from 'express';
import * as Users from './../controllers/usersController.js'
const router = express.Router();


/* GET Users listing. */
router.get('/',         Users.get);

/* GET user with given id. */
router.get('/:id',      Users.find);

/* POST User connection */
router.post('/login',    Users.login);

/* POST Create user */
router.post('/',        Users.create);


export default router;
