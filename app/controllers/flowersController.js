"use strict";


import * as ConnectionFactory from './ConnectionFactory.js';


const db = ConnectionFactory.connect();
const table = 'flowers';

export function get(req, res) {
    db.select().table(table)

    .then((result) => {
        res.json(result);
    });
}

export function find(req, res) {
    db.select().table(table).where('id', req.params.id)

    .then((result) => {
        res.json(result[0]);
    });
}

export function create(req, res) {
    const newFlowers = {
        original_name: req.body.original_name,
        name: req.body.name,
        height: req.body.height,
        nectar: req.body.nectar,
        pollen: req.body.pollen,
        miellat: req.body.miellat,
        flowering: req.body.flowering,
        location: req.body.location,
        points: req.body.points,
        img: req.body.img
    };

    db.insert(newFlowers).into(table)
        .then((result) => {
            if (result <= 0) res.status(404).json(Error.create(404, "Ressource not created: " + req.originalUrl));
            res.status(201).send();
        })
        .catch((error) => res.status(500).json(Error.create(500, error)));
}
