const Pool = new require("pg").Pool;

const pool = new Pool({
  user: "postgress",
  password: "-",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
