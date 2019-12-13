"use strict";


import express from 'express';
import * as Flowers from './../controllers/flowers.js'
const router = express.Router();


/* GET flowers listing. */
router.get('/',     Flowers.get);
router.get('/:id',  Flowers.find);


export default router;
