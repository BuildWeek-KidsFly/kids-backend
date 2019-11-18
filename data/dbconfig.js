const knex = require("knex");
const knexfile = require("../knexfile");
const config = require("../knexfile");
// const environment = process.env.DB_ENV || "development";

module.exports = knex(config.development);
