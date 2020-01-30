"use strict";


import bcrypt       from 'bcrypt';
import * as ConnectionFactory from './ConnectionFactory.js';


const db = ConnectionFactory.connect();
const table = 'users';

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
    const username = req.body.username;
    const password = req.body.password;
    const saltRounds = 10;
    db.select().table(table).where('username', username)
        .then((result) => {
            if (result.length > 0) {
                const error = {
                    code: 403,
                    message: "Username already taken : " + username
                };
                res.status(error.code).json(error);
            }
            res.json(result);
        }).then((result) => {
            bcrypt.hash(password, saltRounds, function(err, hash) {
                const newUser = {
                    username: req.body.username,
                    password: hash
                };
                db.insert(newUser).into(table)
                    .then((result) => {
                        res.status(201).send();
                    }).catch((error) => {
                        res.status(403).send("Could not create user.");
                    });
            });
        });
}

export function login(req, res) {

}
