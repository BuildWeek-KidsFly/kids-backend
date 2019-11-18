const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("connections").insert([
    {
      email: "connection@connection.com",
      password: bcrypt.hashSync("connection", 12),
      home_airport: "LAX"
    },
    {
      email: "lilboss@basedgod.com",
      password: bcrypt.hashSync("flex36", 12),
      home_airport: "SAT"
    },
    {
      email: "twitchstreamer@twitch.com",
      password: bcrypt.hashSync("twitchganggang", 12),
      home_airport: "IND"
    }
  ]);
};
