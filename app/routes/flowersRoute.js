"use strict";


import express from 'express';
import * as Flowers from './../controllers/flowersController.js'
const router = express.Router();


/* GET flowers listing. */
router.get('/',     Flowers.get);

/* GET flower with given id. */
router.get('/:id',  Flowers.find);

/* POST Create flower */
router.post('/',    Flowers.create);


export default router;
