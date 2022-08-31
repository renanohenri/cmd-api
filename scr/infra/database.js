const pgp = require('pg-promise')();

const db = pgp({
    user: 'ehco',
    password: 'ehco123',
    host: 'localhost',
    port: 5432,
    database: 'dbmd'
});

module.exports = db;