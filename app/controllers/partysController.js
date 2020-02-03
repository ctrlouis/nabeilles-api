"use strict";


import * as ConnectionFactory from './ConnectionFactory.js';


const db = ConnectionFactory.connect();
const table = 'party';
const table_score = 'score';

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

export function addScore(req, res) {
    const partyId = req.params.id;
    const scannedFlowers = req.body;
    db.select().table(table).where('id', partyId) // test if party exist
        .then((result) => {
            if (result <= 0) res.status(404).json(Error.create(404, "Ressource not found: " + req.originalUrl)); // party not exist

            // if party exist
            db.select().table(table_score).where('party_id', partyId) // get all score that already exist for this party
                .then((scores) => {
                    let newScores = [];
                    // test if not already in the score
                    scannedFlowers.forEach((currentFlower) => {
                        let notFound = true;
                        scores.forEach((score) => {
                            if (score.flower_id == currentFlower.id) notFound = false;
                        });
                        if (notFound) {
                            newScores.push({
                                party_id: partyId,
                                flower_id: currentFlower.id
                            });
                        }
                    });
                    db.table(table_score).insert(newScores)
                        .then((result) => {
                            res.status(200).send();
                        })
                        .catch((error) => {
                            res.json(error.message);
                        });
                })
                .catch((error) => {
                    res.json(error.message);
                })
        })
        .catch((error) => {
            res.json(error.message);
        });
}