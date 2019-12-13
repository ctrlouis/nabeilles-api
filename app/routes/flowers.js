"use strict";


import express from 'express';
const router = express.Router();


/* GET flowers listing. */
router.get('/', function(req, res, next) {
    res.send('Get flowers');
});


export default router;
