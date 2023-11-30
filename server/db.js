const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Ben",
    host: "localhost",
    port: 5432,
    database: "bookapp"
})

module.exports = pool;