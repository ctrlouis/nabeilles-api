"use strict";


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as ConnectionFactory from './ConnectionFactory.js';


const db = ConnectionFactory.connect();
const table = 'users';
const saltRounds = 10;
const signature = "1402a5e2bace31fdd880a8d0192a9c5c02ac50fa";

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

export function login(req, res) {
    const reqUsername = req.body.username;
    const reqPassword = req.body.password;
    db.select().table(table).where('username', reqUsername).first()
        .then((dbUser) => {
            if (!dbUser) {
                const error = {
                    code: 403,
                    message: "User " + reqUsername + " don't exist"
                };
                res.status(error.code).json(error);
                throw new Error();
            }
            return dbUser;
        }).then((dbUser) => {
            bcrypt.compare(reqPassword, dbUser.password, (err, result) => {
                if (!result) {
                    res.status(403).send("Wrong username/password");
                    throw new Error();
                }

                const token = jwt.sign({username: dbUser.username}, signature);
                res.status(200).send(token);
            });
        });
}


export function create(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    db.select().table(table).where('username', username)
        .then((result) => {
            if (result.length > 0) {
                const error = {
                    code: 403,
                    message: "Username already taken : " + username
                };
                res.status(error.code).json(error);
                throw new Error();
            }
            return result;
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
