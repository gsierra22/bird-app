const pg = require('pg');

const pool = new pg.Pool(
    {
        database: 'bird_list',
        host: 'localhost',
        port: 5432,
        max: 12,
        idleTimeoutMillis: 300000
    }
)

module.exports = pool;