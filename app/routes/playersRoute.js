"use strict";


import express from 'express';
import * as Players from './../controllers/playersController.js'
const router = express.Router();


/* GET players listing. */
router.get('/',     Players.get);

/* GET player with given id. */
router.get('/:id',  Players.find);

/* POST Create flower */
router.post('/',    Players.create);


export default router;
