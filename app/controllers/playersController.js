"use strict";


import * as ConnectionFactory from './ConnectionFactory.js';


const db = ConnectionFactory.connect();
const table = 'players';

export function get(req, res) {
    db.select().table(table)

    .then((result) => {
        res.json(result);
    });
}

export function find(req, res) {
    db.select().table(table).where('id', req.params.id)

    .then((result) => {
        res.json(result);
    });
}

export function create(req, res) {
    res.json(req.body);
}
