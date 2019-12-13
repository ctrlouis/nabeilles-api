"use strict";


import knex from 'knex';


export function connect() {
    return knex({
        client: 'mysql',
        connection: {
            host: 'mariadb',
            user: 'root',
            password: 'password',
            database: 'nabeilles'
        }
    });
}
