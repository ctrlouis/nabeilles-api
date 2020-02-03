"use strict";


import express from 'express';
import * as Partys from './../controllers/partysController.js'
const router = express.Router();


/* GET party listing. */
router.get('/',             Partys.get);

/* GET party with given id. */
router.get('/:id',          Partys.find);

/* POST Create flower */
router.post('/',            Partys.create);

/* POST Add score to party */
router.post('/score/:id',   Partys.addScore);


export default router;
